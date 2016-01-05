class Tool < ActiveRecord::Base

  belongs_to :user
  has_and_belongs_to_many :languages
  has_and_belongs_to_many :platforms
  has_and_belongs_to_many :uses
  has_many :likes
  has_many :relationships
  has_many :followers, through: :relationships, source: :user
  has_many :comments
  has_many :reports
  has_many :tells


  validates :name, length: { maximum: 100 },
            presence: true, uniqueness: {case_sensitive: false}

  validates :website, length: { maximum: 255 },
            presence: true

  validates :description, length: { maximum: 555, minimum: 60 },
            presence: true

end
