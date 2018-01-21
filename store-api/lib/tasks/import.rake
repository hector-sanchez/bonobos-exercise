namespace :import do
  desc "Imports products and inventory"

  task :product_inventory, [:products_file, :inventory_file] => [:environment] do |t, args|
    Import::ProductInventory.new(args[:products_file], args[:inventory_file]).import!
  end
end
