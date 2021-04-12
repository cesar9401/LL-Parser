import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

	@Output() setData: EventEmitter<any> = new EventEmitter();

	texto: string;

  constructor() { }

  ngOnInit(): void {
  }

	onFileSelect(input: HTMLInputElement) {
		const files = input.files;
		let fileToRead = files[0];
		const reader = new FileReader();

		reader.onload = (e) => {
			let txt = reader.result.toString();
			this.setValue(txt);
		}

		reader.readAsText(fileToRead);
	}

	setValue(data) {
		this.texto = data;
		//console.log(this.texto);
		this.setData.emit(this.texto);
	}
}
