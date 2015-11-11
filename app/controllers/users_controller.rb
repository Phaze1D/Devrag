class UsersController < ApplicationController

  def show
    @user = 'user'
    @user_tools_length = 5
    @user_follows_length = 4
  end

  def new
    @user = User.new
  end

  def create

    @user = User.new(user_params)
    respond_to do |format|
      if @user.valid?
        format.html do
          @user.save
          redirect_to root_url
        end
        
        format.json { render json: {:success => 'true'}.to_json }
      else
        format.html { render 'new' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end

    end

  end

  def edit

  end

  def update

  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end
