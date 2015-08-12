module UsersHelper

  # Returns bool if user is view his/her profile
  # Call in _header view to remove username if true
  def is_viewing_own_profile?
    controller_name == 'users' && action_name == 'show' # && is_users_profile
  end

  # Returns bool if user is logged in
  def is_logged_in?
    true
  end

  # Returns bool if user has unseen notifications
  def has_notifications?
    false
  end

  # Return bool if users is following a tool
  def is_following?
    false
  end

  # Calculates the css width of the username-div
  def resize_div
    if has_notifications?
      'width: 140px;'
    elsif is_logged_in? && is_viewing_own_profile?
      'width: 30px;'
    elsif is_logged_in?
      'width: 110px;'
    else
      'width: 30px'
    end
  end


  # Return html of list of user's tools
  def display_user_tools
    html = ''
    @user_tools.each do |tool|
      html += render partial: 'users/user_tool', locals: {tool: tool}

    end
    html
  end

end
