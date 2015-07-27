class HomeController < ApplicationController

  def home

  end

  def search
    @results = [1,2,3,4,5,6,7,8,9,10,11,12,13,14] # Going to be an array of ActiveRecords
  end

end
