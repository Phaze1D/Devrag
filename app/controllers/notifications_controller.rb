class NotificationsController < ApplicationController

  def index
    @current_user_notifications = %w(like follow commentT commentR notit)
    respond_to do |format|
      format.js
    end
  end




end
