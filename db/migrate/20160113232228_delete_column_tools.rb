class DeleteColumnTools < ActiveRecord::Migration
  def change

    remove_column :tools, :soft_delete

  end
end
