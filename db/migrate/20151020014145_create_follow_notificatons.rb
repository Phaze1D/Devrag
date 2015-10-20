class CreateFollowNotificatons < ActiveRecord::Migration
  def change
    create_table :follow_notificatons do |t|

      t.timestamps null: false
    end
  end
end
