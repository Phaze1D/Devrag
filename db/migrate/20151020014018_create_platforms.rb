class CreatePlatforms < ActiveRecord::Migration
  def change
    create_table :platforms do |t|
      t.string :name, null: false
      t.timestamps null: false
    end
    add_index :platforms, :name, unique: true

  end
end
