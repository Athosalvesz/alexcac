import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';

import { AtorDetalhePage } from './../ator-detalhe/ator-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Cartman',
      idade: '13',
      classificacao: 9,
      foto: 'https://upload.wikimedia.org/wikipedia/pt/7/77/EricCartman.png',
      obras: ['South park'],
      pagina: '/cartman',
      favorito: false
    },
    {
      nome: 'Kenny',
      idade: '12',
      classificacao: 9,
      foto: 'https://cdn.shopify.com/s/files/1/0170/5859/4880/products/SP-Kenny-Stand-28_1024x1024.jpg?v=1618604105',
      obras: ['South park'],
      pagina: '/kenny',
      favorito: false
    },
    {
      nome: 'Jonah hill',
      idade: '39',
      classificacao: 8,
      foto: 'https://portalcinerama.com.br/wp-content/uploads/2020/05/jonah-hill_4097a3e7eb930680fbc71fbbefa6c1981dc7174e.jpg',
      obras: ['Superbad'],
      pagina: '/jonah-hill',
      favorito: false
    },
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras)
  }
  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
            this.apresentarToast(ator);
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast(ator: IAtores) {
    const toast = await this.toastController.create({
      message: 'Serie adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler:()=>{
            ator.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }
}
