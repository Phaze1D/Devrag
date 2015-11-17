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

  end

  def edit
    @tools_lpu = %w(c++ short thisisalongin sja;lfadkjisalongerone isthelongestoneofthemalljustoy tjasdf;kljasd ads flkjsdf kjadsf ajd flksd flka)
  end

  def update

  end

  def destroy

  end

end
