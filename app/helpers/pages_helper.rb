module PagesHelper

  def show_devrag_header?
    (controller_name == 'users' && action_name == 'show') ||
        (controller_name == 'tools' && action_name == 'show') ||
        (controller_name == 'tools' && action_name == 'new')
  end


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

end
