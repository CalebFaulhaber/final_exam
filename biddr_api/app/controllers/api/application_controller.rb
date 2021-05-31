class API::ApplicationController < ApplicationController

  skip_before_auction :verify_authenticity_token

  private

  def authenticate_user!
    unless current_user.present?
      render(
        json: { status: 401 },
        status: 401
      )
    end
  end


end