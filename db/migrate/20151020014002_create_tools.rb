class CreateTools < ActiveRecord::Migration
  def change
    create_table :tools do |t|

      t.string :name, null: false
      t.text :description, null: false
      t.string :website, null: false
      t.integer :likes, null: false, default: 0
      t.integer :comments, null: false, default: 0
      t.integer :followers, null: false, default: 0
      t.timestamps null: false
    end

    add_index :tools, :name, unique: true
    

  end
end
