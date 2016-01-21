class UsersController < ApplicationController

  before_action :require_login, only: [:update, :edit, :update_notifications]
  before_action only: [:update, :edit] do
    correct_user(params[:id])
  end

  before_action only: [:update_notifications] do
    correct_user(params[:user_id])
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

    if !params[:user][:password].blank? && @user.valid?
      @user.password_digest = nil
      @user.password = params[:user][:password]
      @user.password_confirmation = params[:user][:password_confirmation]
    end

    respond_to do |format|

      if @user.valid?

        format.html do
          @user.save
          redirect_to user_path(@user.id)
        end

        format.json { render json: {:success => 'true'}.to_json }
      else
        format.html { render 'edit' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end

    end

  end

  # Updates the current users notifications settings
  def update_notifications

    @user = current_user
    @user.update_attributes(user_update_noti_params)
    redirect_to edit_user_url(@user.id)

  end

  def update_avatar

    @user = current_user
    @user.avatar = params[:avatar]
    respond_to do | format |

      if @user.valid?
        @user.save
        format.js
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end

    end

  end

  private

  def user_create_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

  def user_update_noti_params
    params.require(:user).permit(:email_notification, :like_notification, :tell_notification, :follow_notification, :comment_notification)
  end


end
