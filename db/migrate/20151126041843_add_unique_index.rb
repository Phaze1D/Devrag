class AddUniqueIndex < ActiveRecord::Migration
  def change

    add_index :relationships, [:tool_id, :user_id], unique: true
  end
end
