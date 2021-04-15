import { Component } from '@angular/core';
import { GramProduction } from '../assets/ts/gramProduction';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'LL-Parser';
	texto = "";
	productions: GramProduction [];
	editing: boolean = true;

	getData(data: string) {
		this.texto = data;
		this.editing = true;
		//console.log(`Recibimos ${data}`);
	}

	getProductions(prods: GramProduction []) {
		this.productions = prods;
		this.editing = false;
		//console.log(`Recibimos ${prods}`);
	}
}
