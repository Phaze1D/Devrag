class CreateJoinTablesForeignKeys < ActiveRecord::Migration
  def change

    add_foreign_key :languages_tools, :tools
    add_foreign_key :languages_tools, :languages

    add_foreign_key :platforms_tools, :tools
    add_foreign_key :platforms_tools, :platforms

    add_foreign_key :tools_uses, :tools
    add_foreign_key :tools_uses, :uses

    add_foreign_key :relationships_tool_notifications, :tool_notifications
    add_foreign_key :relationships_tool_notifications, :relationships
  end
end
