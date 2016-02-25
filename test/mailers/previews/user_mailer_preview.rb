# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  def password_reset
      user = User.first
      user.create_reset_digest
      UserMailer.password_reset(user, user.reset_token)
    end

end
