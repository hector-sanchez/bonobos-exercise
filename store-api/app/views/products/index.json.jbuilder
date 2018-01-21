json.products @products do |product|
  json.id product.id
  json.name product.name
  json.image product.image
  json.description product.description

  json.inventory product.inventories, :id, :product_id, :style, :waist, :length, :count
end