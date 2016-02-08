class ResetPasswordsController < ApplicationController

  # Check validation token
  # Check expires date

  before_action :get_user, only: [:edit, :update]
  before_action :validate_token, only: [:edit, :update]
  before_action :check_expiration, only: [:edit, :update]

  def new
    @user = User.new
  end

  def create

    @user = User.find_by('email = ? OR username = ?', params[:reset_passwords][:identity], params[:reset_passwords][:identity])

    respond_to do | format |
      if @user

        format.html do
          @user.create_reset_digest
          @user.send_password_reset_email
          flash[:info] = 'Email sent with password reset instructions'
          redirect_to new_session_url
        end

        format.json { render json: {:success => 'true'}.to_json }
      else

        format.html do
          @user = User.new
          @user.errors.add(:identity, 'Email or Username does not exist')
          render 'new'
        end

        format.json {render json: {identity: ['Email or Username does not exist']}, status: :unprocessable_entity }

      end
    end
  end

  def edit

  end

  def update

    @user.password_digest = nil
    @user.password = params[:user][:password]
    @user.password_confirmation = params[:user][:password_confirmation]
    @user.reset_digest = nil

    respond_to do |format|
      if @user.valid?
        format.html do
          @user.save
          log_in @user
          redirect_to user_path(@user.id)
        end

        format.json { render json: {:success => 'true'}.to_json }
      else
        format.html { render 'edit' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end

    end

  end

  private

    def get_user
      @user = User.find_by(email: params[:email])
    end

    def check_expiration
      logger.info("password expired #{ @user.password_reset_expired?}")
      if @user.nil? || @user.password_reset_expired?
        flash[:danger] = "Password reset token has expired."
        respond_to do |format|
          format.js { render js:  "window.location.href = '#{new_reset_passwords_url}'" }
          format.html { redirect_to new_reset_password_url }
        end
      end
    end


    def validate_token
      unless (@user && @user.valid_reset_token?(params[:id]))
        respond_to do |format|
          format.js { render js: "window.location.href = '#{new_session_url}'" }
          format.html { redirect_to new_session_url }
        end
      end
    end

end
