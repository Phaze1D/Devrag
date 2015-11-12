class FollowsController < ApplicationController

  def index
    @user_follows = User.find(params[:user_id]).follows.paginate(:page => params[:page], :per_page => 4)
    respond_to do |format|
      format.js
    end
  end

end
