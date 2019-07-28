class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.string :text, null: false
      t.references :group, foreign_key: true
      t.timestamps
    end
  end
end
