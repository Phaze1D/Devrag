class Comment < ActiveRecord::Base

  before_validation :remove_empty

  belongs_to :user
  belongs_to :tool, counter_cache: true
  belongs_to :to_comment, :class_name => 'Comment', :foreign_key => 'comment_id'
  has_many :replies, :class_name => 'Comment', dependent: :destroy
  has_many :notifications, as: :from_action

  validates :comment, presence: true, length: {maximum: 65535}


  def ordered_replies
    replies.order(created_at: :desc)
  end

  def conversation_root
    root = self
    until root.comment_id.nil?
      root = root.to_comment
    end
    root
  end

  def remove_empty
    document = Nokogiri::HTML.fragment(self.comment)
    document.css('p').find_all.each do |p|
        p.remove if p.content.blank?
    end
    self.comment = document.to_html
  end

end
