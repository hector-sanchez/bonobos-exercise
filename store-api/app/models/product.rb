require 'activerecord-import'

class Product < ApplicationRecord
  has_many :inventories, dependent: :destroy

  scope :with_inventory, ->() { includes(:inventories) }

  validates_presence_of :name, :image, :description
end
