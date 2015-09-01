class ToolsController < ApplicationController


	def show
		@tool = 1
		@tools_lpu = %w(c++ short thisisalongin sja;lfadkjisalongerone 
						isthelongestoneofthemalljustoy
						tjasdf;kljasd ads flkjsdf kjadsf ajd flksd flka) # Change to @tool.languages or platforms or uses 
		
		@tools_comments = [1,21,2,3,3,4,4,3,3];

	end

	def new 

	end

	def create

	end


end
