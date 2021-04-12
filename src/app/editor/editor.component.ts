import { Component, OnInit, Input } from '@angular/core';

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
	}

}
