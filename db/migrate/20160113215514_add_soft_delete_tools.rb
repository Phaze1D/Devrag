class AddSoftDeleteTools < ActiveRecord::Migration
  def change

    change_table :tools do |t|
      t.boolean :soft_delete, default: false
      t.boolean :active, default: true
    end

  end
end
