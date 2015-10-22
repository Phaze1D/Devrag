class CreateJoinTables < ActiveRecord::Migration
  def change
    create_join_table :tools, :languages
    create_join_table :tools, :platforms
    create_join_table :tools, :uses
    create_join_table :relationships, :tool_notifications
  end
end
