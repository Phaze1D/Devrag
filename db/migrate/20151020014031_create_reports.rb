class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.text :description, null: false
      t.timestamps null: false
    end
  end
end
