class CreateTools < ActiveRecord::Migration
  def change
    create_table :tools do |t|

      t.string :name, null: false
      t.text :website, null: false
      t.text :description, null: false
      t.integer :user_id, null: false
      t.timestamps null: false

    end

    add_index :tools, :name, unique: true

  end
end
