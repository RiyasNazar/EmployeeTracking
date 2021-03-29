import { NgModule } from '@angular/core';

import { SharedModule } from '../_shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {
    UserComponent,
} from './user.component';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [
    SharedModule,
    MatDatepickerModule
  ],
})
export class UserModule {}
