require 'csv'

module Import
  class ProductInventory
    module Inventory::Columns
      PRODUCT_ID = 0.freeze
      WAIST = 1.freeze
      LENGTH = 2.freeze
      STYLE = 3.freeze
      COUNT = 4.freeze
    end

    module Product::Columns
      NAME = 0.freeze
    end

    def initialize(products_file_path, inventory_file_path)
      @products_file_path = products_file_path
      @inventory_file_path = inventory_file_path
    end

    def import!
      # should probably consider a transaction here; not sure if activerecord-import uses transactions
      import_products
      import_inventory
    end

    private

    def import_products
      products = []
      products_file = File.expand_path(@products_file_path, __FILE__)

      CSV.foreach(products_file, encoding: 'windows-1251:utf-8', headers: true) do |row|
        product = Product.find_by_name(row[Product::Columns::NAME])

        if product
          product.update_attributes(row.to_h)
        else
          product = Product.new(row.to_h)
        end

        Kernel.print('.')
        products << product
      end

      Product.import(products)

      puts
      puts "Finished importing #{products.count} products."
    end

    def import_inventory
      inventory_items = []
      inventory_file = File.expand_path(@inventory_file_path, __FILE__)

      CSV.foreach(inventory_file, encoding: 'windows-1251:utf-8', headers: true) do |row|
        inventory = Inventory.find_by(product_id: row[Inventory::Columns::PRODUCT_ID], waist: row[Inventory::Columns::WAIST], length: row[Inventory::Columns::LENGTH], style: row[Inventory::Columns::STYLE])
        if inventory
          inventory.update_attributes(count: row[Inventory::Columns::COUNT])
        else
          inventory = Inventory.new(row.to_h)
        end

        Kernel.print('.')
        inventory_items << inventory
      end

      Inventory.import(inventory_items)

      puts
      puts "Finished importing #{inventory_items.count} product inventory items."
    end
  end
end

