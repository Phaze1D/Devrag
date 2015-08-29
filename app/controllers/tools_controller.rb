class ToolsController < ApplicationController


	def show
		@tool = 1
		@tools_lpu = %w(c++ short thisisalongin sja;lfadkjisalongerone    
		thisisthelongestoneofthemalljustincaseyahearmeboy) # Change to @tool.languages or platforms or uses 
		
	end

	def new 

	end

	def create

	end


end
