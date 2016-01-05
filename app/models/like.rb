class Like < ActiveRecord::Base

  belongs_to :tool, counter_cache: true
  belongs_to :user
  has_one :notification, as: :from_action, dependent: :destroy

end
