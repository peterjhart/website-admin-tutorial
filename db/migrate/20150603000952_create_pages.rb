class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :slug
      t.string :title
      t.text :description
      t.text :body
      t.boolean :is_active

      t.timestamps null: false
    end
  end
end
