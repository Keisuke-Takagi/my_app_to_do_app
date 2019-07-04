class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update, :show]
  def index

  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to  groups_path
    else
      render :new
    end
  end

  def show
    @list = List.new
    @card = Card.new
    @group_id = params[:id]
    @lists = List.where(group_id: @group_id)
    @cards = Card.where(group_id: @group_id)
  end

  def edit
  end

  def update
  end


  private
   def group_params
      params.require(:group).permit(:name, { :user_ids => [] })
   end
   def set_group
      @group = Group.find(params[:id])
   end
   def set_list
    @lists = List.find(group_id: params[:id])
   end

end
