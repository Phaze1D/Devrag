class NotificationsController < ApplicationController

  before_action :require_login
  before_action only: [:create, :index, :destroy] do
    correct_user(params[:user_id])
  end

  def index
    @notifications = current_user.notifications.where(seen: false)
    respond_to do |format|
      format.js
    end
  end

  def show

  end

  def create

  end

  def destroy
    notification = Notification.find(params[:id])
    notification.destroy
    respond_to do |format|
      format.js
    end

  end

end
