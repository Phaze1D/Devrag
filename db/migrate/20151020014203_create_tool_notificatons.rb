class CreateToolNotificatons < ActiveRecord::Migration
  def change
    create_table :tool_notificatons do |t|

      t.string :info, null: false
      t.boolean :seen, null: false, default: false
      t.timestamps null: false
    end
  end
end
