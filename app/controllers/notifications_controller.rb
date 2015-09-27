class NotificationsController < ApplicationController

  def index
    @current_user_notifications = %w( like follow commentT commentR notit like commentR notit)
    respond_to do |format|
      format.js
    end
  end

  def new_tool_notify
    @notify_from_tool = (0...10).map { ('a'..'z').to_a[rand(26)] }.join
    respond_to do |format|
      format.js
    end
  end




end
