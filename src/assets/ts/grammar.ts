import { DefNoTerminal } from './defNoTerminal';
import { Production } from './production';
import { SintaxBody } from './sintaxBody';

import { GramProduction } from './gramProduction';

export class Grammar {
	body: SintaxBody;
	productions: GramProduction[] = [];
	current: string;

	constuctor(body: SintaxBody) {
		this.body = body;

		this.convertToGramProd();
		//this.verifyGrammar();

		// Anulables
		this.productions.forEach(p => {
			this.getNullable(p);
		});

		// Primeros
		this.productions.forEach(p => {
			this.getFirsts(p);
		});

		// Agregar fin de cadena a produccion inicial
		this.setFollowFirst();

		// Siguientes
		this.productions.forEach(p => {
			this.getFollows(p);
		});

		// this.productions.forEach(p => {
		// 	console.log(p);
		// });
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

	/**
	 * Obtener produccion segun nombre
	 */
	getProduction(name: string) {
		return this.productions.find(p => p.name === name);
	}

	/**
	 * Obtener primeros
	 */
	getFirsts(prod: GramProduction) {
		this.current = prod.name;
		//let value: [string[]] = prod.prod;

		prod.prod.forEach(value => {
			let j: number = 0;
			let val: string = value[j];
			do {
				if(val.substr(0, 2) === '%_') {
					/* Obtener primeros de produccion */
					let p = this.getProduction(val);

					// Obtener primeros de siguiente produccion
					prod.setFirst(this.getFirstsRecursive(p));

					// Verificar si p es anulable
					if(!p.nullable) {
						break;
					}

				} else if(val !== 'lambda') {
					prod.setFirst([val]);
					break;
				}

				j++;
				val = value[j];

			}while(val);
		});
	}

	/**
	 * Obtener primeros recursivo
	 * @param p
	 * @returns
	 */
	getFirstsRecursive(p: GramProduction) {
		let first: string[] = [];

		p.prod.forEach(value => {
			let j: number = 0;
			let val: string = value[j];

			do {
				if(val.substr(0, 2) === '%_') {
					let prod = this.getProduction(val);
					if(val !== p.name && val !== this.current) {
						// let prod = this.getProduction(val);
						first = [...first, ...this.getFirstsRecursive(prod)];
					}

					if(!prod.nullable) {
						break;
					}
				} else if(val !== 'lambda') {
					first.push(val);
					break;
				}

				j++;
				val = value[j];
			}while(val);

		});
		return first;
	}

	/**
	 * Obtener anulable
	 * @param p
	 */
	getNullable(p: GramProduction) {
		this.current = p.name;
		// console.log(`current ${this.current}`);

		let include: boolean = false;
		for(let value of p.prod) {
			include = value.includes('lambda');
			if(include) {
				p.nullable = true;
				p.checkNullable = true;
				break;
			}
		}

		if(!include) {
			p.nullable = this.getNullableRecursive(p);
			p.checkNullable = true;
		}
	}

	/**
	 * Obtener anulable recursivo
	 * @param p
	 * @returns
	 */
	getNullableRecursive(p: GramProduction) {
		let nullable: boolean = false;
		// console.log(p.name);

		for(let value of p.prod) {
			if(value.includes('lambda')) {
				return true;
			}
		}

		for(let value of p.prod) {
			let count: number = 0;
			for(let v of value) {
				if(v.substr(0, 2) === '%_') {
					if(v !== p.name && v !== this.current) {
						let pr = this.getProduction(v);
						let isNll = (pr.checkNullable) ? pr.nullable : this.getNullableRecursive(pr);
						if(isNll) {
							count++;
						}
					}
				}
			}

			if(count === value .length) {
				// console.log(`nullable: ${p.name}`);
				return true;
			}
		}

		return nullable;
	}

	/**
	 * Fin de cadena, siguiente para produccion inicial
	 */
	setFollowFirst() {
		let initial = this.body.initial.name;
		let p = this.getProduction(initial);
		p.setFollow(['$end']);
	}

	/**
	 * Obtener siguientes
	 * @param p
	 */
	getFollows(p: GramProduction) {
		let name: string = p.name;
		this.current = name;
		// console.log(`Follow -> ${name}`);

		this.productions.forEach(prd => {
			prd.prod.forEach(value => {
				let array: string[] = value;
				for(let i: number = 0; i < array.length; i++) {
					if(array[i] === name) {
						if(array[i + 1] !== undefined) {
							let j: number = i + 1;
							let tmp: string = array[j];
							do {
								if(tmp.substr(0, 2) === '$_') {
									p.setFollow([tmp]);
									break;
								} else if(tmp.substr(0, 2) === '%_') {
									let prodTmp = this.getProduction(tmp);
									p.setFollow(prodTmp.firsts);
									if(!prodTmp.nullable) {
										break;
									}
								}

								j++;
								tmp = array[j];
							} while(tmp);

						} else {
							// Obtener follows recursivamente
							if(p.name !== prd.name) {
								// this.getFollows(prd);
								// p.setFollow(prd.follows);
								p.setFollow(this.getFollowsRecursive(prd));
							}
						}
					}
				}
			});
		});

		p.checkFollow = true;
	}

	getFollowsRecursive(p: GramProduction) {
		let next: string[] = [...p.follows]
		let name: string = p.name;
		//console.log(`FollowRecursive: ${name}`);

		this.productions.forEach(prd => {
			prd.prod.forEach(value => {
				let array: string[] = value;
				for(let i = 0; i < array.length; i++) {
					if(array[i] === name) {
						if(array[i + 1] !== undefined) {
							let j: number = i + 1;
							let tmp: string = array[j];
							do {
								if(tmp.substr(0, 2) === "$_") {
									next.push(tmp);
									break;
								} else if(tmp.substr(0, 2) === '%_') {
									let prodTmp = this.getProduction(tmp);
									next = [...next, ...prodTmp.firsts]
									if(!prodTmp.nullable) {
										break;
									}
								}
								j++;
								tmp = array[j];
							} while(tmp);
						} else {
							// Obtener recursivamente
							if(p.name !== prd.name && p.name !== this.current) {
								if(prd.checkFollow) {
									next = [...next, ...prd.follows];
								} else {
									next = [...next, ...this.getFollowsRecursive(prd)];
								}
							}
						}
					}
				}
			});
		});

		return next;
	}
}
