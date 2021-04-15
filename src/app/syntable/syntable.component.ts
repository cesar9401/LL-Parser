import { Component, Input, OnInit } from '@angular/core';
import { GramProduction } from 'src/assets/ts/gramProduction';

@Component({
  selector: 'app-syntable',
  templateUrl: './syntable.component.html',
  styleUrls: ['./syntable.component.css']
})
export class SyntableComponent implements OnInit {

	@Input() prods: GramProduction [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
