class PagesController < ApplicationController


  def home

  end

  def search
    @results = get_results # Going to be an array of ActiveRecords
    @results = @results.paginate(:page => params[:page], :per_page => 8)

    @relation = Relationship.new
    @like = Like.new

    respond_to do |format|
      format.js
      format.html
    end
  end

  def auto_completion

    results = []

    if params[:name] == 'language'
      results = Language.select(:name).where('name LIKE ?', "#{params[:value]}%").limit(5) unless params[:value].blank?
    end

    if params[:name] == 'platform'
      results = Platform.select(:name).where('name LIKE ?', "#{params[:value]}%").limit(5) unless params[:value].blank?
    end

    if params[:name] == 'use'
      results = Use.select(:name).where('name LIKE ?', "#{params[:value]}%").limit(5) unless params[:value].blank?
    end

    respond_to do | format |
      format.json {render json: results}
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

    tn = [tools_l, tools_p, tools_u]
    tf = nil

    (0..2).each do |i|
      unless tn[i].empty?
        if tf.nil?
          tf = tn[i]
        else
          tf = tf.merge(tn[i])
        end
      end
    end

    sort_results(tf.uniq)

  end

  def sort_results(results)

    if params.has_key?(:sort)
      results = results.order(name: (params[:by] == 'false' ? :asc : :desc) ) if params[:sort] == '1'

      results = results.order(likes_count: (params[:by] == 'false' ? :desc : :asc) ) if params[:sort] == '2'

      results = results.order('RAND()') if params[:sort] == '3'

      results = results.order(relationships_count: (params[:by] == 'false' ? :desc : :asc) ) if params[:sort] == '4'
    end

    results

  end
  
end
