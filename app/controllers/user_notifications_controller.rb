class UserNotificationsController < ApplicationController

  def index
    sleep 0.5
    @current_user_notifications = %w( like follow commentT commentR notit like commentR notit)
    respond_to do |format|
      format.js
    end
  end
end
