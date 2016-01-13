class Report < ActiveRecord::Base

  belongs_to :tool
  belongs_to :user

  validates :description, presence: true, length: {maximum: 255}

end
