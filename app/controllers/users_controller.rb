class UsersController < ApplicationController
  def index
    @user = current_user.name
  end
  def edit
  end
end
