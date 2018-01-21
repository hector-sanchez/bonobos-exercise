class ProductsController < ApplicationController
  def index
    @products = Product.with_inventory
  end

  def show
    @product = Product.with_inventory.find(params[:id])
  end
end
