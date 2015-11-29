class AddIndexLikes < ActiveRecord::Migration
  def change
    add_index :likes, [:tool_id, :user_id], unique: true
  end
end
