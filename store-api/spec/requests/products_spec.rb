require 'rails_helper'

RSpec.describe 'Products API', type: :request do
  let!(:products) { create_list(:product, 5) }

  describe 'GET /products' do
    before { get '/products' }

    it 'returns products' do
      json = JSON.parse(response.body)

      expect(json).not_to be_empty
      expect(json['products'].size).to eq 5
    end

    it 'returns status code 200' do
      expect(response).to have_http_status 200
    end
  end

  describe 'GET /products/:id' do
    before { get "/products/#{product_id}" }

    context 'when the product exists' do
      let(:product_id) { products.first.id }

      it 'returns the product' do
        json = JSON.parse(response.body)

        expect(json).not_to be_empty
        expect(json['product']['id']).to eq product_id
      end

      it 'returns status code 200' do
        expect(response).to have_http_status 200
      end
    end

    context 'when the product does not exist' do
      let(:product_id) { 999 }

      it 'returns status code 404 (not found)' do
        expect(response).to have_http_status 404
      end

      it 'returns a not found message' do
        expect(response.body).to match /Couldn't find Product/
      end
    end
  end
end