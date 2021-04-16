import { GramProduction } from '../ts/gramProduction';

export class SynTable {
	productions: GramProduction [];
	table: Array<any[]>;
	header: string[];
	current: string;
	results: string[];
	private ARROW: string = `➞`;

	constructor(productions: GramProduction[]) {
		this.productions = productions;
		this.table = [[]];
		this.results = [];

		this.getTerminals();
		this.setProductions();
	}

	/**
	 * Obtener terminales (cabecera de la tabla)
	 */
	getTerminals() {
		let head: [string []] = [['']];
		this.header = [''];

		head.push(['$end']);
		this.header.push('$end');

		this.productions.forEach(prd => {
			prd.prod.forEach(p => {
				p.forEach(value => {
					if(value.substr(0, 2) === '$_') {
						head.push([value]);
						this.header.push(value);
					}
				});
			});
		});

		this.table[0] = head;
			// console.log(this.table);
	}

	/**
	 * Construir tabla
	 */
	setProductions() {
		this.productions.forEach(prod => {
			let name = prod.name;
			let body = new Array(this.header.length);
			body.fill([], 0, this.header.length);

			// Agregar nombre del no terminal
			body[0] = [name];

			// Producciones por cada no terminal
			let array: [string []] = prod.prod;
			for(let i = 0; i < array.length; i++) {
				let first: string[] = this.getFirst(array[i]);
				for(let j = 0; j < first.length; j++) {
					let index: number = this.header.indexOf(first[j]);
					// console.log(index);
					let value: string = this.getProductionString(array[i]);
					value = `${prod.name} ${this.ARROW} ${value}`;

					if(!body[index].includes(value)) {
						// Agregar a body
						body[index] = [...body[index], value];
					}

					// Agregar conflictos
					if(body[index].length === 2) {
						this.setResult(name, first[j]);
						// console.log(`Conflictos en (${name}, ${first[j]})`);
					}
					// console.log(`Prod: ${value} Primeros: ${first}`);
				}
			}

			// Anulables
			if(prod.nullable) {
				array = prod.prod;
				array.forEach(a => {
					let nullable: boolean = this.isNullable(a);
					if(nullable) {
						prod.follows.forEach(f => {
							let index: number = this.header.indexOf(f);
							let value: string = this.getProductionString(a);

							// Crear produccion S0 -> S1...
							value = `${prod.name} ${this.ARROW} ${value}`;

							if(!body[index].includes(value)) {
								// Agregar a body
								body[index] = [...body[index], value];
							}

							// Agregar conflictos
							if(body[index].length === 2) {
								this.setResult(name, f);
								// console.log(`Conflictos en (${name}, ${f})`);
							}
						});
					}
				});
				// console.log(`Null ${prod.name}`);
			}

			// Agregar produccion a la tabla
			this.table.push(body);
		});
		//console.log(this.table);
	}

	/**
	 * Obtener primeros de una produccion
	 * @param prod
	 * @returns
	 */
	getFirst(prod: string[]) {
		let first: string[] = [];
		let j: number = 0;
		let val = prod[j];
		do {
			if(val.substr(0, 2) === '%_') {
				let p = this.getProduction(val);

				//Agregar primeros de p a first
				p.firsts.forEach(f => {
					if(!first.includes(f)) {
						first.push(f);
					}
				})

				if(!p.nullable) {
					break;
				}

			} else if(val.substr(0, 2) === '$_') {
				// Agregar val a primeros
				if(!first.includes(val)) {
					first.push(val);
				}

				break;
			}

			j++;
			val = prod[j];
		} while(prod[j]);

		return first;
	}

	/**
	 * Verificar si el cuerpo de una produccion puede ser anulable
	 * @param prod
	 * @returns
	 */
	isNullable(prod: string[]): boolean {
		let count: number = 0;
		for(let i = 0; i < prod.length; i++) {

			if(prod[i] === 'lambda') {
				return true;
			}

			if(prod[i].substr(0, 2) === '%_') {
				let p = this.getProduction(prod[i]);
				if(p.nullable) {
					count++;
				}
			}
		}

		return count === prod.length;
	}

	/**
	 * Obtener una produccion
	 * @param name
	 * @returns
	 */
	getProduction(name: string) {
		return this.productions.find(p => p.name === name);
	}

	getProductionString(prod: string[]): string {
		let value: string = ``;
		prod.forEach(str => {
			value += `${str} `;
		});

		return value.trim();
	}

	setResult(terminal: string, noTerminal: string) {
		this.results.push(`Conflictos en (${terminal}, ${noTerminal})`);
	}

	getResult(): string[] {
		return this.results;
	}
}
