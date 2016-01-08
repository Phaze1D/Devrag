class AddAttachmentUsers < ActiveRecord::Migration
  def change
    remove_column :users, :picture
    add_attachment :users, :avatar
  end
end
