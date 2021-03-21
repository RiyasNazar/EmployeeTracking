import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';

import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../_shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  newEmployeeClicked = false;
  isEditEmployeeClicked = false;

  @ViewChild(`form`) form: NgForm;

  employees = [
    { name: 'Riyas', email: 'riyasrabiya0505@gmail.com', position: 'Front-End Developer', dateOfJoining: '05-01-2020'},
    { name: 'George', email: 'georgerego@gmail.com', position: 'Recruiter Manager', dateOfJoining: '07-04-2007'},
    { name: 'Neil', email: 'neilmathews@gmail.com', position: 'Bar Tender', dateOfJoining: '07-06-2017'}
  ];

  color: boolean = false;

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  model: any = {};
  model2: any = {};
  myValue: any;

  addEmployee() {
    // For adding the new employee in the list
    this.employees.push(this.model);
    this.model = {};
  }

  deleteEmployee(i) {
    // Need to fix UI design for mat dialog
    // const dialogReference = this.matDialog.open(ConfirmationDialogComponent, {
    //   width: '400px',
    //   height: 'auto',
    //   position: { top: '50px', left: '50px' },
    // });
    // dialogReference.componentInstance.confirmationMessage = 'Are you sure want to delete this employee from list?';
    // dialogReference.afterClosed().subscribe(dialogData => {
    //   if (!_.isEmpty(dialogData)) {
    //     this.employees.splice(i, 1);
    //   }
    // });
    this.employees.splice(i, 1);
  }

  editEmployee(editEmployeeInfo, isClicked: boolean) {
    //This function is used to place the user selected employee details in the update section for edit.
    this.isEditEmployeeClicked = isClicked;
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.email = this.employees[editEmployeeInfo].email;
    this.model2.position = this.employees[editEmployeeInfo].position;
    this.model2.dateOfJoining = this.employees[editEmployeeInfo].dateOfJoining;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    //The function used to update the particular employee in the list.
    let editEmployeeInfo = this.myValue;
    for(let i = 0; i < this.employees.length; i++) {
      if(i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
    this.isEditEmployeeClicked = false;
  }


  addNewEmployeeBtn() {
    // To show the add employee content, when user click the add employee button.
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

  changeColorOne() {
    this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    } else {
      return '#f6f6f6';
    }
  }

}
