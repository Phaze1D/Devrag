module NotificationsHelper

  def display_notifications(notifications)

    html = ''
    notifications.each do |notification|
        case notification

          when 'like'

          when 'follow'

          when 'commentT'

          when 'commentR'

          when 'notit'

          else
            # type code here
        end

    end
    html
  end

end
