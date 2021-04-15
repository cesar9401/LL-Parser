import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SintaxBody } from '../../assets/ts/sintaxBody';
import { Grammar } from '../../assets/ts/grammar';
import { GramProduction } from '../../assets/ts/gramProduction';

import { Jison } from 'jison';

// import parser from '../../assets/js/jison/wison.js'; //Module not found: Error: Can't resolve 'fs' in '/home/cesar31/Jison/LL-Parser/src/assets/js/jison'
declare var wison;

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

	title = 'Editor de Texto';
	sintax: SintaxBody;
	grammar: Grammar;
	productions: GramProduction [];

	// Recibimos texto
	@Input() text: string;

	// Enviamos producciones
	@Output() setProd: EventEmitter<GramProduction []> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
		// console.log(wison);
		// console.log(Jison.Parser);
	}

	readText() {
		if(this.text.trim() != "") {
			try {
				this.sintax = wison.parse(this.text);
				console.log(this.sintax);
				this.grammar = new Grammar();
				this.grammar.constuctor(this.sintax);

				// Recuperar producciones con anulables, primeros y siguientes
				this.productions = this.grammar.productions;

				// Emitimos las producciones
				this.setProd.emit(this.productions);

			}catch(error) {
				console.log(error);
			}
		}
	}
}
