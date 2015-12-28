class TellsController < ApplicationController

  before_action :require_login
  before_action only: [:new, :create] do
    tool = Tool.find_by(id: params[:tool_id])
    correct_user(tool ? tool.user.id : -1)
  end

  # MAKE SURE TO ADD A TELL SECTION IN THE TOOLS SHOW PAGE

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


  private

  def tell_params
    params.require(:tell).permit(:description)
  end

  def notify_all_followers(tell)

  end

end
