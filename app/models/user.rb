class User < ActiveRecord::Base

  has_many :tools
  has_many :follows, class_name: 'Tool', through: :relationships
  has_many :likes
  has_many :reports
  has_many :comments
  has_many :notifications

  has_secure_password

  validates :email, presence: true, length: { maximum: 255 },
            format: { with: /\A[\w+\-.]+@[a-z\-.]+\.[a-z]+\z/i },
            uniqueness: { case_sensitive: false }

  validates :username, presence: true, length: { maximum: 50 },
            uniqueness: { case_sensitive: false }

  validates :password, length: { minimum: 6 }


  # validate profile picture

end
