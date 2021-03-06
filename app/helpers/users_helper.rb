module UsersHelper

  # Returns bool if user is view his/her profile
  # Call in _header view to remove username if true
  def is_viewing_own_profile?
    controller_name == 'users' && action_name == 'show' && is_current_user?(params[:id])
  end

  # Returns bool if user has unseen notifications
  def has_notifications?
    current_user.notifications.where(seen: false).count > 0
  end

  # Return bool if current user is following a tool
  def is_following?(tool)
    if is_logged_in?
      current_user.follows.where(id: tool.id).any?
    else
      false
    end

  end

  # If current users likes a tool
  def likes_tool(tool)
    if is_logged_in?
      current_user.likes.where(tool_id: tool.id).any?
    else
      false
    end
  end


end
