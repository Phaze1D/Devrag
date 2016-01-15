class NotificationMailer < ApplicationMailer

  default from: 'no-reply@devrag.com'

  def send_email_notification(user, notification)

    @user = user
    @notification = notification
    mail(to: @user.email, subject: 'Testing Notification')

  end

end
