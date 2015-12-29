module NotificationsHelper

  def display_notifications(notifications)

    html = '<ul id="noti-ul">'
    notifications.each do |notification|
      case notification.from_action_type

        when 'Like'
          html += render(partial: 'notifications/like_noti', locals: {notification: notification})
        when 'Relationship'
          html += render(partial: 'notifications/follow_noti', locals: {notification: notification})
        when 'Comment'
          html += render(partial: 'notifications/comment_noti', locals: {notification: notification})
        when 'Tell'
          html += render(partial: 'notifications/tool_noti', locals: {notification: notification})
        else
          # type code here
      end

    end
    html += '</ul>'
  end

end
