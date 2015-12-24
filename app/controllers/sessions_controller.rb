class SessionsController < ApplicationController


  def new

  end

  def create
    user = User.find_by('email = ? OR username = ?', params[:session][:identity], params[:session][:identity])

    if user && user.authenticate(params[:session][:password])
      log_in user

      if session[:return_to]
        redirect_to session[:return_to]
        session.delete(:return_to)
      else
        redirect_to user
      end

    else
      flash.now[:danger] = 'Incorrect email or password combination'
      render 'new'
    end
  end

  def destroy
    log_out if is_logged_in?
    redirect_to root_url
  end


end
