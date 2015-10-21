class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :picture, null: false, default: 'default.jpg'
      t.string :activation_token, null: true
      t.boolean :activated, default: false
      t.string :reset_token, null: true
      t.datetime :reset_sent_at, null: true
      t.timestamps null: false
    end

    add_index :users, :email, unique: true

  end
end
