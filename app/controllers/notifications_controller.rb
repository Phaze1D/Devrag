class NotificationsController < ApplicationController

  before_action :require_login

  def index
    @current_user_notifications = %w( like follow commentT commentR notit like commentR notit)
    respond_to do |format|
      format.js
    end
  end

  def show

  end

  def create

  end

  def destroy

  end

end
