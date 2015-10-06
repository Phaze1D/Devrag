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

	# Return html of list of user's tools
	def display_user_tools(user_tools)
		html = ''
		tool_owner = 'test'
		user_tools.each do |tool|
			html += render partial: 'tools/user_tool', locals: {tool: tool, user: tool_owner}
		end
		html
	end

end
