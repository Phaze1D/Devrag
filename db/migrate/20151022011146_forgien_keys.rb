class ForgienKeys < ActiveRecord::Migration
  def change

    change_table :tools do |t|
      t.integer :user_id, null: false
    end

    change_table :reports do |t|
      t.integer :for_tool_id,  null: false
      t.integer :by_user_id,  null: false
    end

    change_table :relationships do |t|
      t.integer :user_id,  null: false
      t.integer :tool_id,  null: false
    end

    change_table :comments do |t|
      t.integer :on_tool_id,  null: false
      t.integer :by_user_id,  null: false
      t.integer :reply_to_comment_id, null: true
    end

    rename_table :like_notificatons, :like_notifications
    rename_table :follow_notificatons, :follow_notifications
    rename_table :comment_notificatons, :comment_notifications
    rename_table :tool_notificatons, :tool_notifications

    change_table :like_notifications do |t|
      t.integer :made_by_user_id,  null: false
      t.integer :for_tool_id,  null: false
    end

    change_table :follow_notifications do |t|
      t.integer :made_by_user_id,  null: false
      t.integer :for_tool_id,  null: false
    end

    change_table :comment_notifications do |t|
      t.integer :made_by_user_id,  null: false
      t.integer :for_tool_id, null: false
    end

    change_table :tool_notifications do |t|
      t.integer :made_by_tool_id,  null: false
    end


    add_foreign_key :tools, :users
    add_foreign_key :reports, :tools, column: :for_tool_id
    add_foreign_key :reports, :users, column: :by_user_id
    add_foreign_key :relationships, :tools
    add_foreign_key :relationships, :users
    add_foreign_key :comments, :tools, column: :on_tool_id
    add_foreign_key :comments, :users, column: :by_user_id
    add_foreign_key :comments, :comments, column: :reply_to_comment_id, null: true
    add_foreign_key :like_notifications, :users, column: :made_by_user_id
    add_foreign_key :like_notifications, :tools, column: :for_tool_id
    add_foreign_key :follow_notifications, :users, column: :made_by_user_id
    add_foreign_key :follow_notifications, :tools, column: :for_tool_id
    add_foreign_key :comment_notifications, :users, column: :made_by_user_id
    add_foreign_key :comment_notifications, :tools, column: :for_tool_id
    add_foreign_key :tool_notifications, :tools, column: :made_by_tool_id

  end
end
