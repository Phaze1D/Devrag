class FollowersController < ApplicationController


  def index
    @followers = [1,2,3,3,4,4,5,5,5,3,34,4,31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1]
    @followers = @followers.paginate(:page => params[:page], :per_page => 15)

    respond_to do |format|
      format.js
      format.html
    end

  end

end
