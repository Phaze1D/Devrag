class RepliesController < ApplicationController


  def create
    tool = Tool.find(params[:tool_id])
    @comment = tool.comments.build(reply_params)
    @comment.user_id = current_user.id


    respond_to do |format|

      if @comment.valid?
        @comment.save
        format.js
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end

    end

  end


  private

  def reply_params
    params.require(:comment).permit(:comment, :comment_id)
  end

end
