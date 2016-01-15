# Preview all emails at http://localhost:3000/rails/mailers/notification_mailer
class NotificationMailerPreview < ActionMailer::Preview


  def comment
    NotificationMailer.send_email_notification(User.find(4), Notification.find(11))
  end

  def reply
    NotificationMailer.send_email_notification(User.find(4), Notification.find(7))
  end

  def tell
    NotificationMailer.send_email_notification(User.find(4), Notification.find(8))
  end

end
