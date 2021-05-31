class BidsController < ApplicationController

  # before_action :set_auction
  # before_action :load_bid!, only: [:show, :update, :destroy]


  def index

  end

  def show

  end

  def create
    # @auction.bids.new bid_params
  end

  def update
    # @bid.update bid_params
  end

  def destroy
    # @bid.destroy
  end


  private

  def bid_params
    params.require(:bid).permit(:price)
  end

  def set_auction
    @auction = Auction.find params[:auction_id]
  end

  def load_bid!
    if params[:id].present?
      @bid = Bid.find(params[:id])
    else
      @bid = Bid.new
    end
  end

end
