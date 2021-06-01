class Bid < ApplicationRecord
  belongs_to :auction
  belongs_to :user, optional: true
  
  validates :price, presence: { message: 'Please enter a bid' }

end
