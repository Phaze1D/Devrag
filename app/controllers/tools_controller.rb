class ToolsController < ApplicationController


  def show
    @tool = 1
    @tools_lpu = %w(c++ short thisisalongin sja;lfadkjisalongerone
						isthelongestoneofthemalljustoyajd;lskfjsd;flkjasd;lfkalfkjas;lfk
						tjasdf;kljasd ads flkjsdf kjadsf ajd flksd flka) # Change to @tool.languages or platforms or uses

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
    @user = current_user
  end


  # double check that token validation and max tokens
  def create

    @user = User.find(params[:user_id])
    @tool = @user.tools.build(tool_params)

    respond_to do |format|
      if @tool.valid? && check_lpu_min?

        format.html do
          @tool.save
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
    @tools_lpu = %w(c++ short thisisalongin sja;lfadkjisalongerone isthelongestoneofthemalljustoy tjasdf;kljasd ads flkjsdf kjadsf ajd flksd flka)
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

end
