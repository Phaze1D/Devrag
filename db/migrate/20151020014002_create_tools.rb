class CreateTools < ActiveRecord::Migration
  def change
    create_table :tools do |t|

      t.timestamps null: false
    end
  end
end
