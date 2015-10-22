class ChangeCommentsKey < ActiveRecord::Migration
  def change

    change_column_null :comments, :reply_to_comment_id, true
  end
end
