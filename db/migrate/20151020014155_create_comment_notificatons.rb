class CreateCommentNotificatons < ActiveRecord::Migration
  def change
    create_table :comment_notificatons do |t|

      t.timestamps null: false
    end
  end
end
