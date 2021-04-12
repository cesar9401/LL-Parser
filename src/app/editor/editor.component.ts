import { Component, OnInit, Input } from '@angular/core';
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
		//console.log(Parser);
	}

	readText() {
		if(this.text != "") {
			console.log(this.text);
			wison.parse(this.text);
		}
	}
}
