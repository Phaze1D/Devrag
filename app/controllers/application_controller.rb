class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include SessionsHelper



  protected

  def correct_user(user_id)
    user = User.find_by(id: user_id)
    unless is_current_user?(user)
      redirect_to user_path(current_user.id)
    end
  end


  def require_login

    unless is_logged_in?
      session[:return_to] ||= request.referer

      respond_to do |format|
        format.js {render :js => "window.location.href = '#{new_session_url}'"}
        format.html {redirect_to new_session_url}
      end
    end
  end


end
