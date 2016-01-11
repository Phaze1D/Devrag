class TellsController < ApplicationController

  before_action :require_login, except: [:index]
  before_action only: [:new, :create, :destroy] do
    tool = Tool.find_by(id: params[:tool_id])
    correct_user(tool ? tool.user.id : -1)
  end

  def index

    @tells = Tool.find(params[:tool_id]).tells.where(created_at: Time.now.beginning_of_month..Time.now.end_of_month).order(created_at: :desc)
    respond_to do |format|
      format.js
    end

  end

  def new
    @tool_notification = Tell.new
    @notify_from_tool = Tool.find(params[:tool_id])
    respond_to do |format|
      format.js
    end
  end

  def create
    tell = Tell.new(tell_params)
    tell.tool_id = params[:tool_id]
    respond_to do |format|
      if tell.valid?
        tell.save
        notify_all_followers tell
        format.json { render json: {:success => 'true'}.to_json }
      else
        format.json { render json: tell.errors, status: :unprocessable_entity }
      end

    end
  end

  def destroy

  end


  private

  def tell_params
    params.require(:tell).permit(:description)
  end

  # Make sure to add queue job for this
  def notify_all_followers(tell)
    tell.tool.followers.each do | follower|
      create_notification follower, tell.id, 'Tell'
    end
  end

end
