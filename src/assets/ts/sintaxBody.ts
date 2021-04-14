import { DefNoTerminal } from './defNoTerminal';
import { Production } from './production';

export class SintaxBody {
	initial;
	nonTerms;
	productions;

	constructor(initial: DefNoTerminal, nonTerms: DefNoTerminal[], productions: Production[]) {
	}
}
