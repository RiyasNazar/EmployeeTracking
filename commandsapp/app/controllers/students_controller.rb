class StudentsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_student, only: [:show,:update,:destroy]

    def index
        return render json: {
            status: :ok,
            displayMessage: "Listed"
        },
        status: :ok
    end

    def show
        return render json: {
            status: :ok,
            displayMessage: Student.all
        },
        status: :ok
    end

    #post
    def create
        # student = Student.new(
        #     :first_name=> params[:student][:first_name],
        #     :last_name=> params[:student][:last_name],
        #     :role_no=> params[:student][:role_no],
        #     :age=> params[:student][:age],
        #     :d_o_b=> params[:student][:d_o_b],
        #     :student_active=> params[:student][:student_active],
        # );
        # student.save
        student = Student.new(student_params);
        if student.save!
            return render json: {
                status: :ok,
                displayMessage: "Created successfully"
            },
            status: :ok
        else 
            return render json: {
                status: :false,
                displayMessage: "Not created"
            },
            status: :false
        end
    end   
    
    def update
        @student = Student.find_by(:id=>params[:id])
        @student.update(student_params)
        return render json: {
            status: :ok,
            displayMessage: "Updated Successfully"
        },
        status: :ok
    end

    def destroy
        @student = Student.find_by(:id=>params[:id])
        if @student.present?
          @student.destroy
        end
        return render json: {
            status: :ok,
            displayMessage: "Deleted Successfully"
        },
        status: :ok
    end

    private
     
    def set_student
        @student = Student.find_by(params['id'])
    end

    def student_params
        params.require("student").permit(
            :first_name,
            :last_name,
            :role_no,
            :age,
            :d_o_b,
            :student_active,
            :id,
        )
    end
end    
