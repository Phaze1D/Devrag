class AddUserGithubOptions < ActiveRecord::Migration
  def change

    add_column :users, :used_github, :boolean, default: false

  end
end
