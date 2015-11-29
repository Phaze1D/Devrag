module LikesHelper


  def get_like(tool)
    current_user.likes.find_by(tool_id: tool.id)
  end


end
