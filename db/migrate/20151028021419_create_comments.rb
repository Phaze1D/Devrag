class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|

      t.text :comment, null: false
      t.integer :user_id, null: false
      t.integer :tool_id, null: false
      t.integer :comment_id, null: true
      t.timestamps null: false

    end
  end
end
