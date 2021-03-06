class User < ApplicationRecord
  has_secure_password
  has_many :auctions, dependent: :nullify
  has_many :bids, dependent: :nullify
end
