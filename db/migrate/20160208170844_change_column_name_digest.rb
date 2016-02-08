class ChangeColumnNameDigest < ActiveRecord::Migration
  def change

    rename_column :users, :reset_token, :reset_digest
  end
end
