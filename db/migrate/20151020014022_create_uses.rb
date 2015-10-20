class CreateUses < ActiveRecord::Migration
  def change
    create_table :uses do |t|

      t.timestamps null: false
    end
  end
end
