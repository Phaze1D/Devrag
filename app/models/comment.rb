class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :tool
  belongs_to :to_comment, :class_name => 'Comment', :foreign_key => 'comment_id'
  has_many :replies , :class_name => 'Comment'
  has_many :notifications, as: :from_action

  validates :comment, presence: true, length: {maximum: 65535}


  def ordered_replies
    replies.order(created_at: :desc)
  end

end
