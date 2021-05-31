class Api::V1::AuctionsController < ApplicationController

  before_action :find_auction, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:create, :destroy]

  def index
    auctions = Auction.order created_at: :desc
    render(
      json: questions,
      each_serializer: AuctionCollectionSerializer,
    )
  end

  def show
    render(
      json: @auction,
    )
  end

  def create
    auction = Auction.new auction_params
    auction.user = current_user

    if auction.save
      render json: { id: auction.id }
    else
      render(
        json: { errors: auction.errors.messages },
        status: 422
      )
    end      
  end

  def update
    if @auction.update auction_params
      render json: { id: @auction.id }
    else
      render(
        json: { errors: @auction.errors.messages },
        status: 422
      )
    end
  end

  def destroy
    @auction.destroy
    head :ok
  end


  private

  def find_auction
    @auction = Auction.find params[:id]
  end

  def auction_params
    params.require(:auction).permit(:title, :description, :starting_price, :current_price, :reserve_price, :end_date)
  end

end
