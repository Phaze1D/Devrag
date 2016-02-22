class User < ActiveRecord::Base

  has_many :tools
  has_many :relationships
  has_many :follows, through: :relationships, source: :tool
  has_many :likes
  has_many :reports
  has_many :comments
  has_many :notifications

  has_secure_password

  before_save :downcase_email

  validates :email, presence: true, length: { maximum: 255 },
            format: { with: /\A[\w+\-.]+@[a-z\-.]+\.[a-z]+\z/i },
            uniqueness: { case_sensitive: false }

  validates :username, presence: true, length: { maximum: 50 },
            uniqueness: { case_sensitive: false },
            format: { with: /\A[a-zA-Z0-9_\.]*\z/}


  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true

  attr_accessor :reset_token

  # validate profile picture
  has_attached_file :avatar,
                    styles: { medium: '300x300>'},
                    default_url: ActionController::Base.helpers.image_url('default_avatar.png'),
                    :url =>':s3_domain_url',
                    :path => '/:class/:attachment/:id_partition/:style/:filename'

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  validates_attachment_file_name :avatar, matches: [/png\Z/, /jpe?g\Z/]
  validates_attachment_size :avatar, in: 1..250.kilobytes


  def self.new_token
    SecureRandom.urlsafe_base64
  end

  def self.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  def create_reset_digest
    self.reset_token = User.new_token
    update_attribute(:reset_digest, User.digest(reset_token))
    update_attribute(:reset_sent_at, Time.zone.now)
  end

  def send_password_reset_email
    UserMailer.password_reset(self, self.reset_token).deliver_later
  end

  def valid_reset_token?(token)
    return false if self.reset_digest.nil?
    BCrypt::Password.new(self.reset_digest).is_password?(token)
  end

  def password_reset_expired?
    reset_sent_at < 2.hours.ago
  end



private

  def downcase_email
    self.email = email.downcase
  end

end
