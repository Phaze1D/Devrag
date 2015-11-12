module ToolsHelper

  # If current users likes a tool
  def likes_tool(tool)
    false
  end

  # Return html of list of user's tools
  def display_user_tools(user_tools)
    html = ''
    user_tools.each do |tool|
      tool_owner = tool.user
      html += render partial: 'tools/user_tool', locals: {tool: tool, user: tool_owner}
    end
    html
  end

end
