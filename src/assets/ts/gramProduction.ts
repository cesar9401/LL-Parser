import { Production } from './production';

export class GramProduction {
	name: string;
	prod: [];
	line: number;
	column: number;

	firsts: string [];
	follows: string [];

	constructor(prod: Production) {
		this.name = prod.name;
		this.prod = prod.prod;
		this.line = prod.line;
		this.column - prod.column;

		this.firsts = [];
		this.follows = [];
	}

	setFirst(values: string[]) {
		values.forEach(value => {
			if(!this.firsts.includes(value)) {
				this.firsts.push(value);
			}
		})
	}

	setFollow(value: string) {
		if(!this.follows.includes(value)) {
			this.follows.push(value);
		}
	}
}
