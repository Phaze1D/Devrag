class CounterCache < ActiveRecord::Migration
  def change

    add_column :tools, :likes_count, :integer, default: 0
    add_column :tools, :comments_count, :integer, default: 0
    add_column :tools, :relationships_count, :integer, default: 0


    Tool.all.each do | tool |
      Tool.reset_counters tool.id, :likes
      Tool.reset_counters tool.id, :comments
      Tool.reset_counters tool.id, :relationships
    end


  end
end
