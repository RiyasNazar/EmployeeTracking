import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';

// Here Im using the mongoDb for simple database connection
// const Express = require("express");
// const Mongoose = require("mongoose");
// const BodyParser = require("body-parser");

// var app = Express();
// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({ extended: true }));

// For static example connection due to time management
// Mongoose.connect("mongodb://localhost/theRestApi");
// const PersonModel = Mongoose.model("person", {
//     firstname: String,
//     lastname: String
// });

import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../_shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  newItemClicked = false;
  isEditItemClicked = false;

  @ViewChild(`form`) form: NgForm;

  billDetails = [
    { name: 'Riyas', price: '1000', quantity: '12' },
    { name: 'George', price: '500', quantity: '10' },
    { name: 'Neil', price: '750', quantity: '7' }
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

  addItem() {
    // For adding the new item in the list
    this.billDetails.push(this.model);
    this.model = {};
  }

  deleteItem(i) {
    // Need to fix UI design for mat dialog
    // const dialogReference = this.matDialog.open(ConfirmationDialogComponent, {
    //   width: '400px',
    //   height: 'auto',
    //   position: { top: '50px', left: '50px' },
    // });
    // dialogReference.componentInstance.confirmationMessage = 'Are you sure want to delete this item from list?';
    // dialogReference.afterClosed().subscribe(dialogData => {
    //   if (!_.isEmpty(dialogData)) {
    //     this.employees.splice(i, 1);
    //   }
    // });
    this.billDetails.splice(i, 1);
  }

  editItem(editItemInfo, isClicked: boolean) {
    //This function is used to place the user selected item details in the update section for edit.
    this.isEditItemClicked = isClicked;
    this.model2.name = this.billDetails[editItemInfo].name;
    this.model2.price = this.billDetails[editItemInfo].price;
    this.model2.quantity = this.billDetails[editItemInfo].quantity;
    this.myValue = editItemInfo;
  }

  updateItem() {
    //The function used to update the particular employee in the list.
    let editItemInfo = this.myValue;
    for(let i = 0; i < this.billDetails.length; i++) {
      if(i == editItemInfo) {
        this.billDetails[i] = this.model2;
        this.model2 = {};
      }
    }
    this.isEditItemClicked = false;
  }


  addNewEmployeeBtn() {
    // To show the add item content, when user click the add item button.
    this.newItemClicked = !this.newItemClicked;
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

// These are codes to interaction with server and db(MongoDb)
// app.get("/people", async (request, response) => {
//   try {
//       var result = await PersonModel.find().exec();
//       response.send(result);
//   } catch (error) {
//       response.status(500).send(error);
//   }
// });

// app.post("/person", async (request, response) => {
//   try {
//       var person = new PersonModel(request.body);
//       var result = await person.save();
//       response.send(result);
//   } catch (error) {
//       response.status(500).send(error);
//   }
// });

// app.put("/person/:id", async (request, response) => {
//   try {
//       var person = await PersonModel.findById(request.params.id).exec();
//       person.set(request.body);
//       var result = await person.save();
//       response.send(result);
//   } catch (error) {
//       response.status(500).send(error);
//   }
// });

// app.delete("/person/:id", async (request, response) => {
//   try {
//       var result = await PersonModel.deleteOne({ _id: request.params.id }).exec();
//       response.send(result);
//   } catch (error) {
//       response.status(500).send(error);
//   }
// });

// app.listen(3000, () => {
//   console.log("Listening at :3000...");
// });
