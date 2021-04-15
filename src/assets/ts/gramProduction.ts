import { Production } from './production';

export class GramProduction {
	name: string;
	prod: [string[]];
	line: number;
	column: number;

	firsts: string [];
	follows: string [];
	nullable: boolean;
	checkNullable: boolean;
	checkFollow: boolean;

	constructor(prod: Production) {
		this.name = prod.name;
		this.prod = prod.prod;
		this.line = prod.line;
		this.column - prod.column;

		this.firsts = [];
		this.follows = [];
		this.nullable = false;
		this.checkNullable = false;
		this.checkFollow = false;
	}

	setFirst(values: string[]) {
		values.forEach(value => {
			if(!this.firsts.includes(value)) {
				this.firsts.push(value);
			}
		})
	}

	setFollow(values: string[]) {
		values.forEach(value => {
			if(!this.follows.includes(value)) {
				this.follows.push(value);
			}
		});
	}
}
