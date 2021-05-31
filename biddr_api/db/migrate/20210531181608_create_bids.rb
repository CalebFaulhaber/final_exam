class CreateBids < ActiveRecord::Migration[6.1]
  def change
    create_table :bids do |t|
      t.integer :price
      t.references :auction, foreign_key: true

      t.timestamps
    end
  end
end
