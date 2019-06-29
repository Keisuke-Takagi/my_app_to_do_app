class User < ApplicationRecord
  validates :name, length: {in: 1..6}
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :group_users
  has_many :groups, through: :group_users
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
