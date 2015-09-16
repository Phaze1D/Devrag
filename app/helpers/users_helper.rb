module UsersHelper

  # Returns bool if user is view his/her profile
  # Call in _header view to remove username if true
  def is_viewing_own_profile?
    controller_name == 'users' && action_name == 'show' && is_current_user?(params[:id])
  end

  # Returns bool if user is logged in
  def is_logged_in?
    true;
  end

  # Returns bool if user has unseen notifications
  def has_notifications?
    true
  end

  # Return bool if current user is following a tool
  def is_following?(tool)
    false
  end

  def is_current_user?(user)
    true
  end



  ##
  # Think about redoing this 'resize_div' as a ajax call
  # when modules are ready

  # Calculates the css width of the username-div
  def resize_div

    if is_logged_in?
      return_val = 'width: 0px;'
    else
      return_val = 'width: 30px;'
    end

    if is_viewing_own_profile?
      return_val = 'width: 30px;'
    end

    return_val

  end



  ## When creating the backend move these 2 methods into tools_helper

  # Return html of list of user's tools
  def display_user_tools(user_tools)
    html = ''
    user_tools.each do |tool|
      html += render partial: 'users/user_tool', locals: {tool: tool}
    end
    html
  end

  def display_user_follows(user_following_tools)
     html = ''
    user_following_tools.each do |tool|
      html += render partial: 'users/user_following_tool', locals: {tool: tool}
    end
    html
  end

end
