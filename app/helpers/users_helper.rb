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


end
