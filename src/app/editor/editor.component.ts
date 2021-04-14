import { Component, OnInit, Input } from '@angular/core';
import { SintaxBody } from '../../assets/ts/sintaxBody';
import { Grammar } from '../../assets/ts/grammar';

import { Jison } from '../../../node_modules/jison/lib/jison';

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

	@Input() text: string;

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

			}catch(error) {
				console.log(error);
			}
		}
	}
}
