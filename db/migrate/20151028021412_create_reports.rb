class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|

      t.text :description, null: false
      t.integer :tool_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false

    end
  end
end
