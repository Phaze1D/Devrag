class FollowersController < ApplicationController

  def index

    @tool = Tool.find(params[:tool_id])
    @followers = @tool.followers
    @followers = @followers.paginate(:page => params[:page], :per_page => 15)

    respond_to do |format|
      format.js
      format.html
    end

  end

end
