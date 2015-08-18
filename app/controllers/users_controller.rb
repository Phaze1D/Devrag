class UsersController < ApplicationController


  def new

  end

  def show
    @user = 12
    @user_tools = [1,2,3,4]  # When User Model is created change @user_tools to @user.tools
  end

end
