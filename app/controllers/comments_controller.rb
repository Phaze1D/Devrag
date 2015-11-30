class CommentsController < ApplicationController

  def index

    @tools_comments = [1, 21, 2, 3, 3, 4, 4, 3, 3] # Change to @ tool.comments
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
