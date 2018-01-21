FactoryBot.define do
  factory :inventory do
    product
    style { Faker::Lorem.words(2) }
    waist { Faker::Number.number(2) }
    length { Faker::Number.number(2) }
    count { Faker::Number.number(3) }
  end
end