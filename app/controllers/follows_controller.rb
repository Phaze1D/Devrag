class FollowsController < ApplicationController


  def index
    @user_follows = [1,2,3,4]
    @user_follows = @user_follows.paginate(:page => params[:page], :per_page => 4)

    respond_to do |format|
      format.js
    end
  end

end
