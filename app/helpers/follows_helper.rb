module FollowsHelper


  def display_user_follows(user_following_tools)
    html = ''
    user_following_tools.each do |tool|
      html += render partial: 'follows/user_following_tool', locals: {tool: tool, user: tool.user}
    end
    html
  end

end
