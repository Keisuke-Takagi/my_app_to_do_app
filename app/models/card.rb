class Card < ApplicationRecord
  belongs_to :list
  belongs_to :group
  validates :title, presence: true
end
