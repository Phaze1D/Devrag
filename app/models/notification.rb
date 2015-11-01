class Notification < ActiveRecord::Base

  belongs_to :user
  belongs_to :from_action, polymorphic: true

end
