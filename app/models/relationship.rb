class Relationship < ActiveRecord::Base

  belongs_to :tool, counter_cache: true
  belongs_to :user
  has_one :notification, as: :from_action, dependent: :destroy

  validates_uniqueness_of :user_id, :scope => :tool_id

end
