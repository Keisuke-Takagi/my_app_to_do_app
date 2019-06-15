class ChangeNameToGroups < ActiveRecord::Migration[5.2]
  def change
    change_column :groups, :name,  :string, null: false
  end
end
