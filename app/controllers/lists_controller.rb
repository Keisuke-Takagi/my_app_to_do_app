class ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to group_path(params[:group_id])
    else
    end
  end

  def update
    @a_list = List.find(params[:id])
    if @a_list.update(list_params)
      redirect_to group_path(params[:group_id])
    end
  end

  private
  def list_params
    params.require(:list).permit(:text, :group_id)
  end
  
end
