require 'rails_helper'

RSpec.describe 'ProductInventory import' do
  let(:product_filename) { Rails.root.join('spec/fixtures/products.csv') }
  let(:inventory_filename) { Rails.root.join('spec/fixtures/inventory.csv') }

  let(:importer) { Import::ProductInventory.new(product_filename, inventory_filename) }

  describe '#import!' do
    it 'imports the product and associated inventory' do
      importer.import!

      expect(Product.count).to eq 2
      expect(Inventory.count).to eq 4
      expect(Product.first.inventories.count).to eq 2
    end
  end
end