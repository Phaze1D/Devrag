module SessionsHelper


  def log_in(user)
    session[:current_user_id] = user.id
  end

  def log_in_github(user, accesstoken)
    session[:current_user_id] = user.id
    session[:accesstoken] = accesstoken
  end

  def is_logged_in?
    !current_user.nil?
  end

  def is_current_user?(user)
    current_user == user
  end

  def current_user
    if (user_id = session[:current_user_id])
      @current_user ||= User.find_by(id: user_id)
    end
  end


  def log_out
    session.delete(:current_user_id)
    @current_user = nil
  end

end
