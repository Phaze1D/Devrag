class UserMailer < ApplicationMailer

  def password_reset(user, reset_token)
      @user = user
      @reset_token = reset_token
      mail to: user.email, subject: "Devrag Password Reset"
  end
end
