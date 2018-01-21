FactoryBot.define do
  factory :product do
    name { Faker::Lorem.sentence }
    image { Faker::Placeholdit.image("50x50", 'jpg') }
    description { Faker::Lorem.paragraph }
  end
end