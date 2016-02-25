class CommentsController < ApplicationController

  before_action :require_login, except: [:index]

  before_action only: [:destroy] do
    correct_model('Comment', params[:id])
  end

  before_action :removable, only: [:update]

  def index

    @tool = Tool.find(params[:tool_id])
    @comments =Comment.where(tool_id: @tool.id).where(comment_id: nil).order(created_at: :desc)

    if params.has_key?(:conversation) && !params[:conversation].blank?
      @root_c = Comment.find(params[:conversation]).to_comment
      @comments = @comments - [@root_c]
      @comments = @comments.unshift(@root_c)

    end

    @comments = @comments.paginate(:page => params[:page], :per_page => 8)

    respond_to do |format|
      format.js
    end

  end

  def create

    tool = Tool.find(params[:tool_id])
    @comment = tool.comments.build(comments_params)
    @comment.user_id = current_user.id

    respond_to do |format|
      if @comment.valid?
        @comment.save
        create_notification(tool.user, @comment.id, 'Comment') if tool.user.comment_notification
        format.js
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end

    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    @comment.update_attributes(removed: true)
    respond_to do |format|
      format.js
    end
  end

  def destroy

  end


  private

  def comments_params
    params.require(:comment).permit(:comment)
  end

  def removable
    comment = Comment.find_by(id: params[:id])
    unless (current_user.id == comment.user_id || comment.tool.user_id == current_user.id)
      respond_to do |format|
        format.json { render json: {:no => 'hack'}.to_json, status: :unprocessable_entity }
      end
    end
  end

end
