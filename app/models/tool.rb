class Tool < ActiveRecord::Base

  belongs_to :user
  has_and_belongs_to_many :languages, dependent: :destroy
  has_and_belongs_to_many :platforms, dependent: :destroy
  has_and_belongs_to_many :uses, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :relationships, dependent: :destroy
  has_many :followers, through: :relationships, source: :user
  has_many :comments, dependent: :destroy
  has_many :reports, dependent: :destroy
  has_many :tells, dependent: :destroy


  validates :name, length: { maximum: 100 },
            presence: true, uniqueness: {case_sensitive: false}

  validates :website, length: { maximum: 255 },
            presence: true

  validates :description, length: { maximum: 555, minimum: 60 },
            presence: true

end
