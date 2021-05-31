class AuctionCollectionSerializer < ActiveModel::Serializer

  attributes(
    :id, 
    :description, 
    :starting_price, 
    :current_price, 
    :reserve_price, 
    :end_date, 
    :created_at, 
    :updated_at
  )

end
