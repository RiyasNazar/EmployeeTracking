class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students, :primary_key => :id do |t|
      t.string :first_name
      t.string :last_name
      t.float :role_no
      t.float :age
      t.float :d_o_b
      t.boolean :student_active
      t.timestamps
    end
  end
end
