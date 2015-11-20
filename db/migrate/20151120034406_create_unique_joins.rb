class CreateUniqueJoins < ActiveRecord::Migration
  def change

    add_index :languages_tools, [:tool_id, :language_id], unique: true
    add_index :platforms_tools, [:tool_id, :platform_id], unique: true
    add_index :tools_uses, [:tool_id, :use_id], unique: true

  end
end
