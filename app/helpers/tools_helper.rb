module ToolsHelper

	def display_comments(tool_comments)
		html = ''
		tool_comments.each do |comment|
			html += render partial: 'tools/comment_box', locals: {comment: comment}
		end
		html
	end

	# If current users likes a tool
	def likes_tool(tool)
		false
	end

end
