class User < ActiveRecord::Base

  has_many :tools
  has_many :relationships
  has_many :follows, through: :relationships, source: :tool
  has_many :likes
  has_many :reports
  has_many :comments
  has_many :notifications

  has_secure_password


  validates :email, presence: true, length: { maximum: 255 },
            format: { with: /\A[\w+\-.]+@[a-z\-.]+\.[a-z]+\z/i },
            uniqueness: { case_sensitive: false }

  validates :username, presence: true, length: { maximum: 50 },
            uniqueness: { case_sensitive: false },
            format: { with: /\A[a-zA-Z0-9_\.]*\z/}


  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true



  # validate profile picture
  has_attached_file :avatar, styles: { medium: '300x300>'}, default_url: '/images/default.png'
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  validates_attachment_file_name :avatar, matches: [/png\Z/, /jpe?g\Z/]
  validates_attachment_size :avatar, in: 1..250.kilobytes


  def image_dimensions
    required_width  = 600
    required_height = 600
    dimensions = Paperclip::Geometry.from_file(image.queued_for_write[:original].path)

    errors.add(:avatar, "Width must be #{width}px") unless dimensions.width == required_width
    errors.add(:avatar, "Height must be #{height}px") unless dimensions.height == required_height
  end




end
