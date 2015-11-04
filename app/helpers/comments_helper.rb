module CommentsHelper

  def display_comments(tool_comments)
    html = ''
    tool_comments.each do |comment|
      html += render partial: 'comments/comment_box', locals: {comment: comment}
    end
    html
  end
end
