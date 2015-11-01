class Tool < ActiveRecord::Base

  belongs_to :user
  has_and_belongs_to_many :languages
  has_and_belongs_to_many :platforms
  has_and_belongs_to_many :uses
  has_many :likes
  has_many :followers, class_name: 'User', through: :relationships
  has_many :comments
  has_many :reports
  has_many :tells

end
