class CardsController < ApplicationController
  def create
    @card = Card.new(create_params)
    if @card.save
      redirect_to group_path(params[:group_id])
    else
    end
  end

  private
  def create_params
    params.require(:card).permit(:title, :list_id, :group_id)
  end
end
