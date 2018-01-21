require 'rails_helper'

RSpec.describe Product, type: :model do
  it { should have_many(:inventories).dependent(:destroy) }

  it { should validate_presence_of :name }
  it { should validate_presence_of :image }
  it { should validate_presence_of :description }
end
