class UsersController < ApplicationController

  before_action only: [:update, :edit] do
    correct_user(params[:id])
  end

  def show
    @user = User.find_by(id: params[:id])
    unless @user
      redirect_to root_url
    end
  end

  def new
    @user = User.new
  end

  def create

    @user = User.new(user_create_params)
    respond_to do |format|
      if @user.valid?
        format.html do
          @user.save
          log_in @user

          if session[:return_to]
            redirect_to session[:return_to]
            session.delete(:return_to)
          else
            redirect_to root_url
          end

        end

        format.json { render json: {:success => 'true'}.to_json }
      else
        format.html { render 'new' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end

    end

  end

  def edit
    @user = current_user

  end

  def update
    @user = current_user

    @user.username = params[:user][:username]
    @user.old_password = params[:user][:old_password]

    if @user.valid? && !params[:user][:old_password].blank?
      @user.password_digest = nil
      @user.password = params[:user][:password]
      @user.password_confirmation = params[:user][:password_confirmation]
      @user.old_password = ''
    end

    respond_to do |format|

      if @user.valid?

      else
        format.html { render 'edit' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end

    end



  end


  private

  def user_create_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

  def user_update_params
    params.require(:user).permit(:username, :old_password, :password, :password_confirmation)
  end


end
