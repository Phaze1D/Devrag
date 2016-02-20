class GithubController < ApplicationController

  before_action :require_login, only: [:index_repo]

  def signup
    redirect_to backend_github.authorize_url scope: 'user:email,public_repo'
  end

  def index_repo
    if session.has_key?(:access_token)
      client_github = Github.new oauth_token: session[:access_token]
      @repos = client_github.repos.list
      @repos = @repos.to_ary.paginate(:page => params[:page], :per_page => 6)
    end


    respond_to do | format |
      format.js
      format.html
    end

  end

  def callback

    log_out

    access_token = backend_github.get_token params[:code]
    client_github = Github.new(oauth_token: access_token.token)
    email = client_github.users.emails.list[0].email
    username = client_github.users.get.login
    randpass = SecureRandom.base64(12)
    user = User.new


    if User.find_by_email(email).nil? && User.find_by_username(username).nil?
      user.username = username
      user.email = email
      user.used_github = true
      user.password = randpass
      user.password_confirmation = randpass
      user.save!
    end

    if !User.find_by_username(username).nil? && User.find_by_email(email).nil?
      user.username = username + rand(100..9999).to_s
      user.email = email
      user.used_github = true
      user.password = randpass
      user.password_confirmation = randpass
      user.save!
      log_in_github user, access_token.token
      flash[:notice] = "Your github username #{username} has already been taken so we gave you a new username #{user.username} which you can change in the settings page"
    end

    unless User.find_by_email(email).nil?
      user = User.find_by_email(email)
    end


    log_in_github user, access_token.token

    if session[:return_to]
      redirect_to session[:return_to]
      session.delete(:return_to)
    else
      redirect_to index_repos_url
    end

  end

  private
  def backend_github
    @github ||= Github.new client_id: ENV["GITHUB_CLIENT"], client_secret: ENV["GITHUB_SECRET"]
  end

end
