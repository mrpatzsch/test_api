class CreateHotels < ActiveRecord::Migration
  def change
    create_table :hotels do |t|
      t.string :city
      t.string :stateProvinceCode
      t.string :country
      t.date :arrive
      t.date :depart

      t.timestamps null: false
    end
  end
end
