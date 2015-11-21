class ToolsController < ApplicationController


  def show
    @tool = Tool.find(params[:id])

    @tools_comments = [1, 21, 2, 3, 3, 4, 4, 3, 3] # Change to @ tool.comments
    @tools_comments = @tools_comments.paginate(:page => params[:page], :per_page => 8)

    respond_to do |format|
      format.js
      format.html
    end

  end

  def index
    @user_tools = User.find(params[:user_id]).tools.paginate(:page => params[:page], :per_page => 5)
    respond_to do |format|
      format.js
    end
  end

  def new
    @tool = Tool.new
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

  end

  def destroy

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

  #Careful when adding duplicate relationships
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
    languages.each do |language|
      language = language.downcase
      if Language.exists?(name: language)
        array.push Language.find_by_name(language)
      else
        lang = Language.new(name: language)
        lang.save
        array.push lang
      end
    end
    array

  end

  def save_platforms(platforms)

    array = []
    platforms.each do |platform|
      platform = platform.downcase
      if Platform.exists?(name: platform)
        array.push Platform.find_by_name(platform)
      else
        plat = Platform.new(name: platform)
        plat.save
        array.push plat
      end
    end
    array

  end

  def save_uses(uses)

    array = []
    uses.each do |use|
      use = use.downcase
      if Use.exists?(name: use)
        array.push Use.find_by_name(use)
      else
        us = Use.new(name: use)
        us.save
        array.push us
      end
    end
    array

  end

end
