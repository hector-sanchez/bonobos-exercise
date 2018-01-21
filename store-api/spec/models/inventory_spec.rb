require 'rails_helper'

RSpec.describe Inventory, type: :model do
  it { should belong_to :product }

  it { should validate_presence_of :style }
  it { should validate_presence_of :waist }
  it { should validate_presence_of :length }
  it { should validate_presence_of :count }
  it { should validate_numericality_of :waist }
  it { should validate_numericality_of :length }
  it { should validate_numericality_of :count }
end
