class CreatePlatforms < ActiveRecord::Migration
  def change
    create_table :platforms do |t|

      t.timestamps null: false
    end
  end
end
