class CreateInventories < ActiveRecord::Migration[5.1]
  def change
    create_table :inventories do |t|
      t.integer :waist
      t.integer :length
      t.string :style
      t.integer :count
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end
