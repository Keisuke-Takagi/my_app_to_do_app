class ListsController < ApplicationController
  def create
    
    @list = List.new(list_params)
    if @list.save
      redirect_to group_path(params[:group_id])
    else
    end
  end
  private
  def list_params
    params.require(:list).permit(:text, :group_id)
  end
end
