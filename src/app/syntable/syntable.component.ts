import { Component, Input, OnInit } from '@angular/core';
import { GramProduction } from 'src/assets/ts/gramProduction';
import { SynTable } from '../../assets/ts/synTable';

@Component({
  selector: 'app-syntable',
  templateUrl: './syntable.component.html',
  styleUrls: ['./syntable.component.css']
})
export class SyntableComponent implements OnInit {

	@Input() prods: GramProduction [] = [];

	synTable: SynTable;
	table: Array<any[]>;
	results: string[];

  constructor() { }

  ngOnInit(): void {
		this.synTable = new SynTable(this.prods);
		this.table = this.synTable.table;
		this.results = this.synTable.getResult();
	}

}
