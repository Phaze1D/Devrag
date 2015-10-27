class ToolNotificationsController < ApplicationController

  def new

    @tool_notification = ToolNotification.new
    @notify_from_tool = Tool.new(id: 1, name: 'Tool Name Test')
    respond_to do |format|
      format.js
    end

  end


  def create

  end

end
