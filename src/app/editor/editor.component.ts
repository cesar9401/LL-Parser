import { Component, OnInit, Input } from '@angular/core';
import {Production} from '../../assets/ts/production';
import {ProductionContainer} from '../../assets/ts/productionContainer';
// import parser from '../../assets/js/jison/wison.js'; //Module not found: Error: Can't resolve 'fs' in '/home/cesar31/Jison/LL-Parser/src/assets/js/jison'

declare var wison;

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

	title = 'Editor de Texto';

	@Input() text: string;

	constructor() { }

	ngOnInit(): void {
		console.log(wison);
	}

	readText() {
		if(this.text.trim() != "") {
			try {
				let Production = wison.parse(this.text);
				console.log(Production);

				console.log(`Fila: ${Production.line}, Columna: ${Production.column}`);
			}catch(error) {
				console.log(error);
			}
		}
	}
}
