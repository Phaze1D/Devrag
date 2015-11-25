class PagesController < ApplicationController


  def home

  end

  def search
    @results = get_results # Going to be an array of ActiveRecords
    @results = @results.paginate(:page => params[:page], :per_page => 8)


    respond_to do |format|
      format.js
      format.html
    end
  end



  private

  # Recheck whether to use merge (AND) instead of OR, you get more refine results
  def get_results

    tools_l = []
    tools_p = []
    tools_u = []

    tools_l = Tool.joins(:languages).where('languages.name LIKE ?', "%#{params[:language]}%") unless params[:language].blank?
    tools_p = Tool.joins(:platforms).where('platforms.name LIKE ?', "%#{params[:platform]}%") unless params[:platform].blank?
    tools_u = Tool.joins(:uses).where('uses.name LIKE ?', "%#{params[:use]}%") unless params[:use].blank?

    tools_l | tools_p | tools_u

  end
  
end
