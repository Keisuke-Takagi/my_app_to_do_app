class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  has_many :lists
  has_many :cards
  validates :user_ids, presence: true
  validates :name, presence: true
end
