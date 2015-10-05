class HomeController < ApplicationController

  def home

  end

  def search
    @results = [1,2,3,4,5,64,44,2,3,3,4,4,5,3,5,4,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,23,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3] # Going to be an array of ActiveRecords
    @results = @results.paginate(:page => params[:page], :per_page => 8)
    logger.info @results
    @tools_lpu = %w(c++ short thisisalongin sja;lfadkjisalongerone
            thisisthelongestoneofthemalljustincaseyahearmeboy) # this will turn into a local partial varible


    respond_to do |format|
      format.js
      format.html
    end
  end

end
