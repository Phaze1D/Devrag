class Tell < ActiveRecord::Base

  belongs_to :tool
  has_many :notifications, as: :from_action

end
