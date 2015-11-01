class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :tool
  belongs_to :reply, :class_name => 'Comment'
  has_many :replys , :class_name => 'Comment'

end
