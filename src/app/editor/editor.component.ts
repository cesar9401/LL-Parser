import { Component, OnInit, Input } from '@angular/core';
import {Production} from '../../assets/ts/production';
import {ProductionContainer} from '../../assets/ts/productionContainer';
//import { parser } from '../../assets/js/jison/wison';

//var Parser = require("../../assets/js/wison.js");

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
				let initial = wison.parse(this.text);
				console.log(`Simbolo inicial: ${initial}`);
			}catch(error) {
				console.log(error);
			}
		}
	}
}
