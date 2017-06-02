import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	cursos: Curso[];

  constructor(public navCtrl: NavController) {
  	this.cursos=[
	  	{
	  		nombre: 'NodeJs Basic',
	  		descripcion: 'Para principiantes 100% práctico, Plataforma JS mas utilizada a nivel mundial',
	  		img:'http://b.thumbs.redditmedia.com/J0Jwp3grRndmZVt3gi_wB2LLkZeUOZDc33ZximrJCVQ.jpg'

	  	},
	  	{
	  		nombre: 'Mocha',
	  		descripcion: 'Framework para pruebas unitarias',
	  		img:'http://b.thumbs.redditmedia.com/YchRBM6kh5yuBvQV6xGxABKkvGJhmGJmgoXeNWMSaDo.jpg'

	  	},
	  	{
	  		nombre: 'Mongo',
	  		descripcion: 'Base de datos no SQL, remote',
	  		img:'http://b.thumbs.redditmedia.com/C8lkwRaYKZlhKsAdKPvxzciVek0T_elTLEHrcBDGveA.jpg'

	  	},
	  	{
	  		nombre: 'Postgres',
	  		descripcion: 'BD SQL alta performance',
	  		img:'http://b.thumbs.redditmedia.com/YZDKF_QiiShcWPRV3jbARdKPZraVhQpEZBkIR7WaoLQ.jpg'

	  	},
	  	{
	  		nombre: 'Heroku',
	  		descripcion: 'Plataforma de Servicios en la nube',
	  		img:'http://b.thumbs.redditmedia.com/w163AM7oGuSuQKlb-D9hgMaM1fk2BUsQZ2QJw06rsQo.jpg'

	  	}
	  	]
  }

}

export interface Curso {
        nombre: string;
        descripcion: string;
        img: string;
    }
