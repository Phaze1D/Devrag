class Relationship < ActiveRecord::Base

  belongs_to :tool
  belongs_to :user
  has_one :notification, as: :from_action

  validates_uniqueness_of :user_id, :scope => :tool_id

end
