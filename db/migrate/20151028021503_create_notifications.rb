class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|

      t.boolean :seen, null: false, default: false
      t.integer :user_id, null: false
      t.references :from_action, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
