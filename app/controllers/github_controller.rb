class GithubController < ApplicationController

  def signup
    redirect_to backend_github.authorize_url  scope: 'user:email,public_repo'
  end

  def index_repo

  end

  def callback

    log_out

    access_token = backend_github.get_token params[:code]
    client_github = Github.new(oauth_token: access_token.token)
    email = client_github.users.emails.list[0].email
    username = client_github.users.get.login
    user = User.new


    if User.find_by_email(email).nil? && User.find_by_username(username).nil?
      user.username = username
      user.email = email
      user.used_github = true
      user.save!(:validate => false)
    end

    if !User.find_by_username(username).nil? && User.find_by_email(email).nil?
      user.email = email
      user.used_github = true
      user.save!(:validate => false)
      redirect_to index_repos_url(username: true)
    end

    unless User.find_by_email(email).nil?
      user = User.find_by_email(email)
    end


    log_in_github user, access_token.token

    if session[:return_to]
      redirect_to session[:return_to]
      session.delete(:return_to)
    else
      redirect_to index_repos_url(username: false)
    end

  end

  private
  def backend_github
    @github ||= Github.new client_id: '8ad308daba9669acb8e4', client_secret: '8db4b4bae8e0488d2a406abea64d3e3081780042'
  end

end
