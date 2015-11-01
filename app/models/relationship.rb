class Relationship < ActiveRecord::Base

  belongs_to :tool
  belongs_to :user
  has_one :notification, as: :from_action

end
