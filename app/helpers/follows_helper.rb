module FollowsHelper

  def display_user_follows(user_following_tools)
    html = ''
    tool_owner = 'test'
    user_following_tools.each do |tool|
      html += render partial: 'follows/user_following_tool', locals: {tool: tool, user: tool_owner}
    end
    html
  end

end
