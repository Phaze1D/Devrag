class NotificationsController < ApplicationController

  def index
    @current_user_notifications = %w(like follow follow follow like commentT commentT commentT commentT
                                      commentR commentR notit notit notit notit like like follow)
    respond_to do |format|
      format.js
    end
  end

end
