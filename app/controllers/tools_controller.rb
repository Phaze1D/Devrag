class ToolsController < ApplicationController


	def show
		@tool = 1
		@tools_lpu = %w(c++ short thisisalongin sja;lfadkjisalongerone 
						isthelongestoneofthemalljustoyajd;lskfjsd;flkjasd;lfkalfkjas;lfk
						tjasdf;kljasd ads flkjsdf kjadsf ajd flksd flka) # Change to @tool.languages or platforms or uses 
		
		@tools_comments = [1,21,2,3,3,4,4,3,3] # Change to @ tool.comments
		@tools_comments = @tools_comments.paginate(:page => params[:page], :per_page => 8)

    respond_to do |format|
      format.js
      format.html
    end

	end

	def index
		@user_tools = [1,2,1,1,2,1,1,1,1,1,1,2,2,3,4,5,1,1,1,1,1,1,1,1,1,1,1,1]  # When User Model is created change @user_tools to @user.tools
		@user_tools= @user_tools.paginate(:page => params[:page], :per_page => 5)

			respond_to do |format|
				format.js
			end

	end

	def new
		@tool = Tool.new
		@current_user = User.new
		@current_user.id = 12
	end

	def create

	end

	def edit
		@tools_lpu = %w(c++ short thisisalongin sja;lfadkjisalongerone isthelongestoneofthemalljustoy tjasdf;kljasd ads flkjsdf kjadsf ajd flksd flka)
	end

	def update

	end


end
