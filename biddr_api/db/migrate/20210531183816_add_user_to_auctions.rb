class AddUserToAuctions < ActiveRecord::Migration[6.1]
  def change
    add_reference :auctions, :user, foreign_key: true
  end
end
