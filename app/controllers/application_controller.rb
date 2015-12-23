class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include SessionsHelper



  protected

  def require_login
    logger.info('Testing require login')
    unless is_logged_in?
      respond_to do |format|
        format.js {render :js => "window.location.href = '#{new_session_url}'"}
        format.html {redirect_to new_session_url}
      end
    end
  end


end
