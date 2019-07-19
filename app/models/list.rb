class List < ApplicationRecord
  belongs_to :group
  has_many :cards,  dependent: :delete_all
  validates :text, presence: true
  
end
