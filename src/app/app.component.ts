import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LL-Parser';
	texto = "";

	getData(data: string) {
		this.texto = data;
		//console.log(`Recibimos ${data}`);
	}
}
