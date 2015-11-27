module UsersHelper

  # Returns bool if user is view his/her profile
  # Call in _header view to remove username if true
  def is_viewing_own_profile?
    controller_name == 'users' && action_name == 'show' && is_current_user?(params[:id])
  end

  # Returns bool if user has unseen notifications
  def has_notifications?
    true
  end

  # Return bool if current user is following a tool
  def is_following?(tool)
    current_user.follows.where(id: tool.id).any?
  end


end
