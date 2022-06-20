import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent {

  constructor( private modalCtrl: ModalController) {}
async openModal(){
  const modal = await this.modalCtrl.create({
    component:DepositModalComponent
  });
  await modal.present();
}
  ngOnInit() {}

}
