class ResetPasswordsController < ApplicationController

  # Check validation token
  # Check expires date

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

  end

end
