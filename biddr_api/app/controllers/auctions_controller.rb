class AuctionsController < ApplicationController

  before_action :load_auction!, except: [:create]

  def index
    # @auctions = Auctions.order(created_at: :Desc)
  end

  def create
    # @auction = Auction.new auction_params
    # @auction.save
  end

  def show
    
  end

  def update
    # @auction.update auction_params
  end

  def destroy
    # @auction.destroy
  end

  private

  def auction_params
    params.require(:auction).permit(:title, :description, :starting_price, :current_price, :reserve_price, :end_date)
  end

  def load_auction!
    if params[:id].present?
      @auction = Auction.find(params[:id])
    else
      @auction = Auction.new
    end
  end

end
