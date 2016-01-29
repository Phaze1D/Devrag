class ToolsController < ApplicationController

  before_action :require_login, except: [:show, :index]
  before_action only: [:new, :create, :edit, :update, :destroy] do
    correct_user(params[:user_id])
  end

  before_action only: [:edit, :update, :destroy] do
    correct_model('Tool', params[:id])
  end

  # the saving of spacing tokens

  def show
    @tool = Tool.find(params[:id])
  end

  def index
    @user_tools = User.find(params[:user_id]).tools.where('name LIKE ?', "%#{params[:query]}%").paginate(:page => params[:page], :per_page => 5)
    respond_to do |format|
      format.js
    end
  end

  def new

    @tool = Tool.new

    if params.has_key?(:repo_id) && session.has_key?(:access_token)

      client_github = Github.new oauth_token: session[:access_token]
      client_github.repos.list do |repo|
        
        if repo.id.to_s == params[:repo_id]
          @tool.name = repo.full_name
          @tool.description = repo.description
          @tool.website = repo.html_url
          break
        end
      end

    end

    @user = User.find(params[:user_id])

  end


  # double check that token validation and max tokens
  def create

    @user = User.find(params[:user_id])
    @tool = @user.tools.build(tool_params)

    respond_to do |format|
      if @tool.valid? && check_lpu_min?

        format.html do
          @tool.save

          languages = save_languages params[:tool][:languages][:names].values if params[:tool][:languages].has_key?(:names)
          platforms = save_platforms params[:tool][:platforms][:names].values if params[:tool][:platforms].has_key?(:names)
          uses = save_uses params[:tool][:uses][:names].values if params[:tool][:uses].has_key?(:names)

          create_lpu_relationships(@tool, languages, platforms, uses)

          redirect_to @user
        end

        format.json { render json: {:success => 'true'}.to_json }
      else
        format.html { render 'new' }
        format.json { render json: @tool.errors, status: :unprocessable_entity }
      end

    end

  end

  def edit

    @user = User.find(params[:user_id])
    @tool = Tool.find(params[:id])

  end

  def update

    @tool = Tool.find(params[:id])
    @tool.attributes = tool_params

    respond_to do |format|
      if @tool.valid? && check_lpu_min?

        format.html do
          @tool.save
          @tool.languages.delete_all
          @tool.platforms.delete_all
          @tool.uses.delete_all
          languages = save_languages params[:tool][:languages][:names].values if params[:tool][:languages].has_key?(:names)
          platforms = save_platforms params[:tool][:platforms][:names].values if params[:tool][:platforms].has_key?(:names)
          uses = save_uses params[:tool][:uses][:names].values if params[:tool][:uses].has_key?(:names)

          create_lpu_relationships(@tool, languages, platforms, uses)

          redirect_to @tool.user
        end

        format.json { render json: {:success => 'true'}.to_json }
      else
        format.html { render 'edit' }
        format.json { render json: @tool.errors, status: :unprocessable_entity }
      end

    end


  end

  def destroy

    tool = Tool.find_by(id: params[:id])
    tool.destroy unless tool.nil?
    respond_to do |format|
      format.js
    end

  end


  private

  def tool_params
    params.require(:tool).permit(:name, :website, :description)
  end

  def check_lpu_min?

    if params[:tool][:languages].has_key?(:names) || params[:tool][:platforms].has_key?(:names) || params[:tool][:uses].has_key?(:names)
      true
    else
      @tool.errors[:lpu] << 'You must link atleast one language, platform or use'
      false
    end
  end


  def create_lpu_relationships(tool, languages = [], platforms = [], uses = [])

    unless languages.nil?
      languages.each do |language|
        unless tool.languages.where(name: language.name).any?
          tool.languages << language
        end
      end
    end

    unless platforms.nil?
      platforms.each do |platform|
        unless tool.platforms.where(name: platform.name).any?
          tool.platforms << platform
        end
      end
    end


    unless uses.nil?
      uses.each do |use|
        unless tool.uses.where(name: use.name).any?
          tool.uses << use
        end
      end
    end

    tool.save

  end

  def save_languages(languages)

    array = []
    languages.each do |language_name|
      language_name = language_name.downcase
      if Language.exists?(name: language_name)
        array.push Language.find_by_name(language_name)
      else
        lang = Language.new(name: language_name)
        lang.save
        array.push lang
      end
    end
    array

  end

  def save_platforms(platforms)

    array = []
    platforms.each do |platform_name|
      platform_name = platform_name.downcase
      if Platform.exists?(name: platform_name)
        array.push Platform.find_by_name(platform_name)
      else
        plat = Platform.new(name: platform_name)
        plat.save
        array.push plat
      end
    end
    array

  end

  def save_uses(uses)

    array = []
    uses.each do |use_name|
      use_name = use_name.downcase
      if Use.exists?(name: use_name)
        array.push Use.find_by_name(use_name)
      else
        us = Use.new(name: use_name)
        us.save
        array.push us
      end
    end
    array

  end

end
