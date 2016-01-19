class ConversationsController < ApplicationController

  # before_action :require_login
  # before_action do
  #   correct_user(params[:user_id])
  # end
  #
  # before_action  do
  #   correct_model('Comment', params[:id])
  # end

  def index

    user = User.find_by(id: params[:user_id])
    @comments = user.comments.order(created_at: :desc).paginate(:page => params[:page], :per_page => 4)

    respond_to do |format|
      format.js
    end

  end

  def show

  end

end
