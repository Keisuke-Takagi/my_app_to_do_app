class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :text, null: false
      t.reference :group, foreign_key: true
      t.timestamps
    end
  end
end
