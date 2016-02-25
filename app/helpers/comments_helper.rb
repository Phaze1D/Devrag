module CommentsHelper

  def display_comments(tool_comments)
    html = ''
    tool_comments.each do |comment|
      html += render partial: 'comments/comment_box', locals: {comment: comment}
    end
    html
  end

  def removable?(comment)
    is_logged_in? && (current_user.id == comment.user_id || comment.tool.user_id == current_user.id)
  end

end
