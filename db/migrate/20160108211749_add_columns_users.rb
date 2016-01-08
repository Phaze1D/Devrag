class AddColumnsUsers < ActiveRecord::Migration
  def change

    change_table :users do |t|

      t.boolean :comment_notification, default: true
      t.boolean :like_notification, default: true
      t.boolean :follow_notification, default: true
      t.boolean :tell_notification, default: true
      t.boolean :email_notification, default: true

    end

  end
end
