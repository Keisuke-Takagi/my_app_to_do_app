class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title
      t.text :discription
      t.references :group, foreign_key: true, null: false 
      t.references :list, foreign_key: true
      t.timestamps
    end
  end
end
