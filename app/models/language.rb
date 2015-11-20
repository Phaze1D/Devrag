class Language < ActiveRecord::Base
  has_and_belongs_to_many :tools

  validates :name, length: { maximum: 100 },
            presence: true, uniqueness: {case_sensitive: false}

  before_save :downcase_name

  private
    def downcase_name
      self.name = name.downcase
    end
end
