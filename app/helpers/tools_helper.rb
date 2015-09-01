module ToolsHelper

	def display_comments(tool_comments)
		html = ''
		tool_comments.each do |comment|
			html += render partial: 'comment_box', locals: {comment: comment}
		end
		html
	end

end
