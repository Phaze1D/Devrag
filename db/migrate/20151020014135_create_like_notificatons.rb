class CreateLikeNotificatons < ActiveRecord::Migration
  def change
    create_table :like_notificatons do |t|

      t.timestamps null: false
    end
  end
end
