class Tell < ActiveRecord::Base

  belongs_to :tool
  has_many :notifications, as: :from_action

  validates :description, presence: true, length: {maximum: 655}

end
