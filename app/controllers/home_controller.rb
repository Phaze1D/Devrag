class HomeController < ApplicationController

  def home

  end

  def search
    @results = [1,2,3,4,5,64,44] # Going to be an array of ActiveRecords
    @tools_lpu = %w(c++ short thisisalongin shithisalongerone
            thisisthelongestoneofthemalljustincaseyahearmeboy) # this will turn into a local partial varible

  end

end
