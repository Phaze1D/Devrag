class TellsController < ApplicationController

  before_action :require_login
  before_action only: [:new, :create] do
    tool = Tool.find_by(id: params[:tool_id])

    correct_user(tool ? tool.user.id : -1)

  end

  def new
    @tool_notification = Tell.new
    @notify_from_tool = Tool.new(id: 1, name: 'Tool Name Test')
    respond_to do |format|
      format.js
    end
  end

  def create

  end

end
