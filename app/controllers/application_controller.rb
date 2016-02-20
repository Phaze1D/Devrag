class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  force_ssl if: :ssl_configured?

  def ssl_configured?
    !Rails.env.development?
  end

  include SessionsHelper


  protected

  def create_notification(user, from_action_id, from_action_type)
    noti = Notification.new(user_id: user.id, from_action_id: from_action_id, from_action_type: from_action_type)
    noti.save

    if user.email_notification && (from_action_type == 'Comment' || from_action_type == 'Tell' )
      NotificationMailer.send_email_notification(user, noti).deliver_later
    end

  end

  def correct_user(user_id)
    user = User.find_by(id: user_id)
    unless is_current_user?(user)
      respond_to do |format|
        format.js { render :js => "window.location.href = '#{root_url}'" }
        format.html { redirect_to root_url }
      end
    end
  end

  def correct_model(model, model_id)
    md_c = Object.const_get model
    md = md_c.find_by(id: model_id)

    if md.nil? || md.user_id != current_user.id
      respond_to do |format|
        format.js { render :js => "window.location.href = '#{root_url}'" }
        format.html { redirect_to root_url }
      end
    end

  end


  def require_login
    unless is_logged_in?
      session[:return_to] ||= request.referer

      respond_to do |format|
        format.js { render :js => "window.location.href = '#{new_session_url}'" }
        format.html { redirect_to new_session_url }
      end
    end
  end


end
