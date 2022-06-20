import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
{
    path: '',
    component:ManageComponent
}
    ])

  ],
  declarations: [ManageComponent,DepositModalComponent],
  entryComponents: [DepositModalComponent]
})
export class ManageComponentModule {}