import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.page.html',
  styleUrls: ['./mission-list.page.scss'],
})
export class MissionListPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async showMenuPage() {
    const modal = await this.modalController.create({
      component: MenuPage,
    });
    return await modal.present();
  }
}

