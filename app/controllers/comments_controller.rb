class CommentsController < ApplicationController

  def index

    @tools_comments = Tool.find(params[:tool_id]).comments
    @tools_comments = @tools_comments.paginate(:page => params[:page], :per_page => 8)

    respond_to do |format|
      format.js
    end

  end

  def create

  end

  def destroy

  end

end
