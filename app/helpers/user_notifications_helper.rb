module UserNotificationsHelper

  def display_notifications(notifications)

    html = '<ul id="noti-ul">'
    notifications.each do |notification|
      case notification

        when 'like'
          html += render(partial: 'user_notifications/like_noti', locals: {notification: notification})
        when 'follow'
          html += render(partial: 'user_notifications/follow_noti', locals: {notification: notification})
        when 'commentT'
          html += render(partial: 'user_notifications/comment_noti', locals: {notification: notification})
        when 'commentR'
          html += render(partial: 'user_notifications/comment_noti', locals: {notification: notification})
        when 'notit'
          html += render(partial: 'user_notifications/tool_noti', locals: {notification: notification})
        else
          # type code here
      end

    end
    html += '</ul>'
  end


end
