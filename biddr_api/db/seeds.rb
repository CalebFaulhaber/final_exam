# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bid.destroy_all
Auction.destroy_all

NUM_AUCTIONS = 20
NUM_BIDS = 3
NUM_USERS = 10
PASSWORD = 'supersecret'

super_user = User.create(
  name: 'caleb',
  email: 'caleb@faul.com',
  password: PASSWORD
  # is_admin: true
)

NUM_USERS.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
    name: "#{first_name} #{last_name}",
    email: "#{first_name}@#{last_name}.com",
    password: PASSWORD
  )
end

users = User.all

NUM_AUCTIONS.times do
  created_at = Faker::Date.backward(days:365 * 5)
  RESERVE = Random.new.rand(1_000..1_000)
  STARTING = RESERVE / 2
  END_DATE = created_at+3.days

  a = Auction.create(
    title: Faker::vehicle.make_and_model,
    description: Faker::vehicle.standard_specs,
    starting_price: STARTING,
    current_price: 0,
    reserve_price: RESERVE,
    end_date: END_DATE,
    user: users.sample
  )

end





