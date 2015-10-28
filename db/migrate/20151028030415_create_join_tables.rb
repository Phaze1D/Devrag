class CreateJoinTables < ActiveRecord::Migration
  def change
    add_foreign_key :tools, :users

    add_foreign_key :reports, :tools
    add_foreign_key :reports, :users

    add_foreign_key :comments, :tools
    add_foreign_key :comments, :users
    add_foreign_key :comments, :comments

    add_foreign_key :likes, :tools
    add_foreign_key :likes, :users

    add_foreign_key :relationships, :tools
    add_foreign_key :relationships, :users

    add_foreign_key :tells, :tools

    add_foreign_key :notifications, :users

    create_join_table :tools, :languages
    create_join_table :tools, :platforms
    create_join_table :tools, :uses

    add_foreign_key :languages_tools, :tools
    add_foreign_key :languages_tools, :languages

    add_foreign_key :platforms_tools, :tools
    add_foreign_key :platforms_tools, :platforms

    add_foreign_key :tools_uses, :tools
    add_foreign_key :tools_uses, :uses



  end
end
