import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
      {
nome: 'Mortal Kombat (2021)',
 lancamento: '15/04/2021',

            duracao: '1h50m',
 classificacao: 9,
 cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
 generos: ['Ação', 'Fantasia', 'Aventura'],
 pagina: '/mortal-kombat',
 favorito: false
 },
 {
 nome: 'Vingadores: Ultimato (2019)',
 lancamento: '25/04/2019 (BR)',
duracao: '3h01m',
 classificacao: 6,
cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
 generos: ['Aventura', 'Ficção científica', 'Ação'],
 pagina: '/avengers',
favorito: false
 },
 {
 nome: 'Superbad: É Hoje (2007)',
lancamento: '02/10/2007 (BR)',
 duracao: '1h53m',
 classificacao: 7,
 cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aqr4CdX6eeA5UkVAJzKZMs7FeEw.jpg',
 generos: ['Comédia'],
 pagina: '/Superbad',
 favorito: false
 },
{
 nome: 'Avatar (2009)',
 lancamento: '19/12/2009 (BR)',
  duracao: '2h 57m',
 classificacao: 8,
cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
 generos: ['Ficção científica, Aventura, Ação'],
pagina: '/avatar-1',
 favorito: false
 },
 {
 nome: 'Avatar: O Caminho da Água (2022)',
 lancamento: '15/12/2022 (BR) ',
 duracao: '3h 12m',
 classificacao: 7,
 cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mbYQLLluS651W89jO7MOZcLSCUw.jpg',
 generos: ['Ficção científica, Aventura, Ação'],

   pagina: '/avatar-2',
 favorito: false  }
  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras)
  }
  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast(filme);
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast(filme: IFilme) {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler:()=>{
            filme.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }

}
