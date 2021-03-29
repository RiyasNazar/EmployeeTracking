import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

const MODULES: any[] = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatDialogModule
];

export const SHARED_MODULES_WITH_PROVIDERS: any[] = [];

@NgModule({
    imports: [
        ...MODULES,
        ...SHARED_MODULES_WITH_PROVIDERS,
    ],
    declarations: [ConfirmationDialogComponent],
    providers: [  
        MatDatepickerModule, 
        MatInputModule,
        MatNativeDateModule, 
        MatDialogModule
    ],
    entryComponents: [ConfirmationDialogComponent],
    exports: [
        ...MODULES,
    ]
})

export class SharedModule {
}