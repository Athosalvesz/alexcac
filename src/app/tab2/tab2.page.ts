import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';

import { SerieDetalhePage } from './../serie-detalhe/serie-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaSeries: ISerie[] = [
  {
 nome: 'South Park (1997)',
lancamento: '13/08/1997',
 temporadas: '26',
 classificacao: 8,
 cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iiCY2QIGSnmtVkIdjkKAfwDs0KF.jpg',
 generos: ['Animação, Comédia'],
 pagina: '/south-park',
 favorito: false
 },
 {
 nome: 'Sintonia (2019)',
 lancamento: '09/08/2019',
 temporadas: '3',
classificacao: 9,
 cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sTTxrKX9DzB5K6wdsfCs5bQ0r6r.jpg',
 generos: ['Drama, Crime '],
 pagina: '/sintonia',
 favorito: false
 },
 {
 nome: 'The Last of Us (2023))',
 lancamento: '15/01/2023',
 temporadas: '1',
 classificacao: 8,
 cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
 generos: ['Drama'],
 pagina: '/the-last-of-us',
  favorito: false
 }
  ];

  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras)
  }
  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast(serie);
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast(serie: ISerie) {
    const toast = await this.toastController.create({
      message: 'Serie adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler:()=>{
            serie.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }
}
