class Group < ApplicationRecord
  validates :name, presence: true 
  has_many :group_users
  has_many :users, through: :group_users
  has_many :lists
  has_many :cards
  # validates :name, presence: true
end
