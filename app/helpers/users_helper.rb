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

end
