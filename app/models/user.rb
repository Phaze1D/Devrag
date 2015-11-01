class User < ActiveRecord::Base

  has_many :tools
  has_many :follows, class_name: 'Tool', through: :relationships
  has_many :likes
  has_many :reports
  has_many :comments
  has_many :notifications

end
