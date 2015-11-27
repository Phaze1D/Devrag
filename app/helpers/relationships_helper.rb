module RelationshipsHelper

  def get_relationship(tool)
    current_user.relationships.find_by(tool_id: tool.id)
  end

end
