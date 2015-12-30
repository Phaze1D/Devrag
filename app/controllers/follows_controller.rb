class FollowsController < ApplicationController

  def index
    @user_follows = User.find(params[:user_id]).follows.where('name LIKE ?', "%#{params[:query]}%").paginate(:page => params[:page], :per_page => 5)
    respond_to do |format|
      format.js
    end
  end

end
