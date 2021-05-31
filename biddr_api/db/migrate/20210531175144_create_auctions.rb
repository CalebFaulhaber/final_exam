class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.integer :starting_price
      t.integer :current_price
      t.integer :reserve_price
      t.datetime :end_date

      t.timestamps
    end
  end
end
