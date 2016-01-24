class GithubController < ApplicationController

  def signup
    redirect_to backend_github.authorize_url  scope: 'user:email,public_repo'
  end

  def login

  end

  def callback

    # Check if email exist
    # Get username check if is unique

    access_token = backend_github.get_token params[:code]
    client_github = Github.new(oauth_token: access_token.token)
    email = client_github.users.emails.list[0].email
    username = client_github.users.get.login
    user = User.new

    # Github Possiablities
    # 1] username and email do not exist
    # 2] username exist but email doesnot
    # 3] username doesnot but email does
    # 4] username and email exist

    # Github Meanings
    # 1] The github user has not created a account with us
    # 2] Someone else took the github user's username and used a different email to create an account with us
    # 3] The github user has already created an account with this email but used a different username then that of his github username
    # 4] The github user has already created an account

    # Github Outcomes
    # 1] Create new account with null password_digest and with github username, email, avatar
    # 2] Prompt the user to set a new username because his github name has already been taken
    # 3] Prompt the user that his email has already been registerd and that if he forgot his/her password to use the forgot password link to reset their password and login
    # 4] Login with the users creadentions



    if User.find_by_email(email).nil? && User.find_by_username(username).nil?
      user.username = username
      user.email = email
      user.used_github = true
      user.save!(:validate => false)
    end


    log_in_github user, access_token.token

    if session[:return_to]
      redirect_to session[:return_to]
      session.delete(:return_to)
    else
      redirect_to user
    end

  end

  private
  def backend_github
    @github ||= Github.new client_id: '8ad308daba9669acb8e4', client_secret: '8db4b4bae8e0488d2a406abea64d3e3081780042'
  end

end
