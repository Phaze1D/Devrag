class CreateTells < ActiveRecord::Migration
  def change
    create_table :tells do |t|

      t.text :description, null: false
      t.integer :tool_id, null: false
      t.timestamps null: false

    end
  end
end
