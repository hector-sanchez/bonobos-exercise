require 'activerecord-import'

class Inventory < ApplicationRecord
  belongs_to :product

  validates_presence_of :waist, :length, :style, :count
  validates_numericality_of :waist, :length, :count
end
