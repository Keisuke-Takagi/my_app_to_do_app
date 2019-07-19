class User < ApplicationRecord
  validates :name, length: {in: 1..6}
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :group_users
  has_many :groups, through: :group_users
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
