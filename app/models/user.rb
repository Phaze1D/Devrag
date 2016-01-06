class User < ActiveRecord::Base

  has_many :tools
  has_many :relationships
  has_many :follows, through: :relationships, source: :tool
  has_many :likes
  has_many :reports
  has_many :comments
  has_many :notifications

  has_secure_password

  attr_accessor :old_password

  validates :email, presence: true, length: { maximum: 255 },
            format: { with: /\A[\w+\-.]+@[a-z\-.]+\.[a-z]+\z/i },
            uniqueness: { case_sensitive: false }

  validates :username, presence: true, length: { maximum: 50 },
            uniqueness: { case_sensitive: false },
            format: { with: /\A[a-zA-Z0-9_\.]*\z/}

  validates :password, length: { minimum: 6 }

  validate :old_password_validation, on: :update

  # validate profile picture

  def old_password_validation
    unless old_password.blank?
      unless self.authenticate(self.old_password)
        errors.add(:old_password, 'Incorrect Password')
      end
    end

  end


end
