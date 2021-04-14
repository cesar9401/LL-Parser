
%lex

%options case-sensitive

/* Comentarios y espacios en blanco */
input								[^\n\r]
lineTerminator			\r|\n|\r\n
lineComment					"#" {input}* {lineTerminator}?
comentContent				([^*]|\*+[^/*])*
multiLineComment		"/""**" {comentContent} "*"+ "/"
comment							{lineComment}|{multiLineComment}
whitespace					{lineTerminator}|[\s\t\f]
/* Nombre para no terminales */
no_t_name						"%_"\w+
/* Nombre para terminales */
t_name							"$_"\w+
/* Palabra reservada */
reserved_word				"‘" {input}+ "’"
/* Cadena sin espacios */
inputNoSpace				[^\n\r\s\t\f]+

%%

"Wison"						return 'WISON';
"Terminal"				return 'TERM';
"Lex"							return 'LEX';
"Syntax"					return 'SYNTX';
"No_Terminal"			return 'NO_TERM';
"Initial_Sim"			return 'INIT_SIMB';
{no_t_name}				return 'NO_T_NAME';
{t_name}					return 'T_NAME';

"<-"							return 'ARROW';
/* < = */
"<="							return 'ARROW_D';
"¿"								return 'LQM';
"{"								return 'LBRACE';
"}"								return 'RBRACE';
":"								return 'COLON';
";"								return "SEMI_COLON";
"¿"								return 'LQM';
"?"								return 'RQM';
"+"								return 'PLUS';
"*"								return 'TIMES';
"("								return 'LPAREN';
")"								return 'RPAREN';
"|" 							return 'PLECA';
"[0-9]"						return 'EXP_NUMS';
"[aA-zZ]"					return 'EXP_LETTERS';

{reserved_word}		return 'R_WORD';
{comment}					/* Ignore */
{whitespace}			/* Ignore */

{inputNoSpace}		return 'INPUT_N';

<<EOF>>						return 'EOF';
.
	%{
		console.log(`Error lexico ${yytext}`);
		return 'INVALID';
	%}

/lex

/* Imports */
%{

	// const reqProd = require('../../ts/production.js');
	// const prodct = require('../../ts/gramProduction');

	// import { GramProduction } from '../../ts/gramProduction';

	/* Terminales */
	let Terminal = function(name, value, quant, line, column) {
		this.name = name;
		this.value = value;
		this.quant = quant;
		this.line = line;
		this.column = column;
	}

	/* No Terminales */
	let DefNoTerminal= function(name, line, column) {
		this.name = name;
		this.line = line;
		this.column = column;
	}

	let Production = function(name, prod, line, column) {
		this.name = name;
		this.prod = prod;
		this.line = line;
		this.column = column;
	}

	let Container = function(terminal, nonTerminal, initial, prods) {
		this.terminal = terminal;
		this.nonTerminal = nonTerminal;
		this.initial = initial;
		this.prods = prods;
	}

	let sintaxBody = function(initial, nonTerms, productions) {
		this.initial = initial;
		this.nonTerms = nonTerms;
		this.productions = productions;
	}

%}

/* associatios and precedence */

/* produccion inicial */
%start wison_struct

%%

wison_struct
	: wison EOF
		{
			return $$;
		}
	;

wison
	: WISON LQM wison_body RQM WISON
		{
			$$ = $3;
		}
	;

wison_body
	: lex_prod syntax_prod
		{
			$$ = $2;
		}
	;

lex_prod
	: LEX LBRACE COLON make_term COLON RBRACE
		{
			//console.log(`Terminales: ${$4}`);
		}
	;

syntax_prod
	: SYNTX LBRACE LBRACE COLON syntax_body COLON RBRACE RBRACE
		{
			$$ = $5;
		}
	;

syntax_body
	: make_non_t initial_sim make_prod
		{
			console.log(`Productions ${$3}`);
			$$ = new sintaxBody($2, $1, $3);
		}
	;

make_term
	: terminal
		{
			$$ = [$1];
		}
	| make_term terminal
		{
			$$ = [...$1, $2];
		}
	;

make_non_t
	: no_terminal
		{
			$$ = [$1];
		}
	| make_non_t no_terminal
		{
			$$ = [...$1, $2];
		}
	;

/* terminales */
terminal
	: TERM T_NAME ARROW opt SEMI_COLON
		{
			$$ = new Terminal($2, $4[0], $4[1], this._$.first_line, this._$.first_column);
			//console.log(`Terminal: ${$2} ${$4[0]} ${$4[1]}`);
		}
	| error
		{
			console.log(`Error ${yytext}, linea ${this._$.first_line} columna: ${this._$.first_column}`);
		}
	;

opt
	: make_concat
	| term
		{ $$ = $1; }
	;

/* Crear concatenaciones */
make_concat
	: concat
	| make_concat concat
	;

concat
	: LPAREN term2 RPAREN
	;

term2
	: term_opt quant
	;

term_opt
	: T_NAME
	| EXP_NUMS
	| EXP_LETTERS
	;
/* Crear concatenaciones */

/* Expresiones sin concatenacion */
term
	: term_option quant
		{ $$ = [$1, $2]; }
	;

term_option
	: R_WORD
		{ $$ = $1; }
	| EXP_NUMS
		{ $$ = $1; }
	| EXP_LETTERS
		{ $$ = $1; }
	;

quant
	: RQM
		{ $$ = $1; }
	| TIMES
		{ $$ = $1; }
	| PLUS
		{ $$ = $1; }
	| /* empty */
		{ $$ = undefined; }
	;
/* Expresiones sin concatenacion */

no_terminal
	: NO_TERM NO_T_NAME SEMI_COLON
	{
		//console.log(`Definicion no terminal, linea ${this._$.first_line}, columna: ${this._$.first_column}`);
		$$ = new DefNoTerminal($2, this._$.first_line, this._$.first_column);
	}
	| error
	;

/* Simbolo inicial */
initial_sim
	: INIT_SIMB NO_T_NAME SEMI_COLON
	{
		$$ = new DefNoTerminal($2, this._$.first_line, this._$.first_column);
	}
	;

make_prod
	: prod
		{
			$$ = [$1];
		}
	| make_prod prod
		{
			$$ = [...$1, $2];
		}
	;

prod
	: NO_T_NAME ARROW_D prod_body SEMI_COLON
	{
		//console.log(`Production: ${$1} -> ${$3}`);
		$$ = new Production($1, $3, this._$.first_line, this._$.first_column);
	}
	;

prod_body
	: make_t_n_prod__ or_prod_
		{
			if($2) {
				$$ = [$1, ...$2];
			} else {
				$$ = [$1];
			}
		}
	;

make_t_n_prod__
	:	make_t_n_prod
		{ $$ = $1; }
	| /* lambda */
		{
			$$ = ["lambda"];
		}
	;

or_prod_
	: or_prod
		{
			$$ = $1;
		}
	| /* undefined */
	;

or_prod
	: PLECA make_t_n_prod__
		{
			$$ = [$2];
		}
	| or_prod PLECA make_t_n_prod__
		{
			$$ = [...$1, $3];
		}
	;

make_t_n_prod
	: t_n_prod
		{
			$$ = [$1];
		}
	| make_t_n_prod t_n_prod
		{
			$$ = [...$1, $2];
		}
	;

t_n_prod
	: T_NAME
		{ $$ = $1; }
	| NO_T_NAME
		{ $$ = $1; }
	;
