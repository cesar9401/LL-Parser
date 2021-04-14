import { DefNoTerminal } from './defNoTerminal';
import { Production } from './production';
import { SintaxBody } from './sintaxBody';

import { GramProduction } from './gramProduction';

export class Grammar {
	body: SintaxBody;
	productions: GramProduction[] = [];

	constuctor(body: SintaxBody) {
		this.body = body;

		this.convertToGramProd();
		//this.verifyGrammar();

		this.productions.forEach(p => {
			this.getFirst(p);
		});

		this.productions.forEach(p => {
			console.log(p);
		})

	}

	verifyGrammar() {
		let initial: DefNoTerminal = this.body.initial;
		let nonTerms: DefNoTerminal[] = this.body.nonTerms;
		let prod: Production[] = this.body.productions;

		let present = false;
		let repeat = false;

		// Verificar declaracion de simbolo inicial
		nonTerms.forEach((non: DefNoTerminal) => {
			if(non.name == initial.name) {
				present = true;
			}
		});

		if(!present) {
			console.log(`El simbolo inicial ${initial.name} no ha sido declarado como no terminal.`)
		}

		/* Verificar repetidos */
		nonTerms.forEach(non => {
			let n = nonTerms.filter(value => value.name === non.name).length;
			if(n > 1) {
				console.log(`El elemento ${non.name} fue declarado ${n} veces`);
				repeat = true;
			}
		});

		/* verificar que todas las producciones esten declaradas(en no terminales) */
		prod.forEach(p => {
			let n = nonTerms.filter(value => value.name === p.name).length;
			if(n==0) {
				console.log(`No se ha declarado ${p.name} como no terminal`);
			}
		})

		/* Verificar que los terminales esten declarados */


		/* Obtener primeros */
		console.log(prod[1]);
	}

	convertToGramProd() {
		this.body.productions.forEach(p => {
			this.productions.push(new GramProduction(p));
		});
	}

	getFirst(prod: GramProduction) {
		prod.prod.forEach(value => {
			let val: string = value[0];

			if(val.substr(0, 2) === '%_') {
				/* Obtener primeros de produccion */
				let p = this.getProduction(val);

				// Agregar esto a primeros de
				prod.setFirst(this.getFirstFrom(p));
				// prod.firsts = [...this.getFirstFrom(p), ...prod.firsts];
			} else {
				prod.setFirst([val]);
			}
		});
	}

	getProduction(name: string) {
		return this.productions.find(p => p.name === name);
	}

	getFirstFrom(p: GramProduction) {
		let first: string[] = [];

		p.prod.forEach(value => {
			let val: string = value[0];

			if(val.substr(0, 2) === '%_') {
				if(val !== p.name) {
					let prod = this.getProduction(val);

					// Agregar esto a primeros de p
					p.setFirst(this.getFirstFrom(prod));
					// p.firsts = [...this.getFirstFrom(prod), ...p.firsts];
				}
			} else {
				first.push(val);
			}
		});

		return first;
	}
}
