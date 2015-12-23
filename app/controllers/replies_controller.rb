class RepliesController < ApplicationController

  before_action :require_login, only: [:create]

  def create
    tool = Tool.find(params[:tool_id])
    @reply = tool.comments.build(reply_params)
    @reply.user_id = current_user.id


    respond_to do |format|

      if @reply.valid?
        @reply.save
        format.js
      else
        format.json { render json: @reply.errors, status: :unprocessable_entity }
      end

    end

  end

  def show
    reply = Comment.find(params[:id])
    respond_to do |format|
      format.js {render partial: 'comments/comment_box', locals: {comment: reply} }
    end

  end


  private

  def reply_params
    params.require(:comment).permit(:comment, :comment_id)
  end

end
