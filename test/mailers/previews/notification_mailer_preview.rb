# Preview all emails at http://localhost:3000/rails/mailers/notification_mailer
class NotificationMailerPreview < ActionMailer::Preview


  def comment
    NotificationMailer.send_email_notification(User.find(4), Notification.find(24))
  end

  def reply
    NotificationMailer.send_email_notification(User.find(4), Notification.find(22))
  end

  def tell
    NotificationMailer.send_email_notification(User.find(4), Notification.find(4))
  end

end
