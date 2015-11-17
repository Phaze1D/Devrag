class Use < ActiveRecord::Base
  has_and_belongs_to_many :tools

  validates :name, length: { maximum: 100 },
            presence: true, uniqueness: {case_sensitive: false}
end
