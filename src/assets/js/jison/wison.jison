
%lex

%options case-sensitive

/* Comentarios y espacios en blanco */
input					[^\n\r]
lineTerminator			\r|\n|\r\n
lineComment				"#" {input}* {lineTerminator}?
comentContent			([^*]|\*+[^/*])*
multiLineComment		"/""**" {comentContent} "*"+ "/"
comment					{lineComment}|{multiLineComment}
whitespace				{lineTerminator}|[\s\t\f]
/* Nombre para no terminales */
no_t_name				"%_"\w+
/* Nombre para terminales */
t_name					"$_"\w+
/* Palabra reservada */
reserved_word			"‘" {input}+ "’"
/* Cadena sin espacios */
inputNoSpace			[^\n\r\s\t\f]+

%%

"Wison"					return 'WISON';
"Terminal"				return 'TERM';
"Lex"					return 'LEX';
"Syntax"				return 'SYNTX';
"No_Terminal"			return 'NO_TERM';
"Initial_Sim"			return 'INIT_SIMB';
{no_t_name}				return 'NO_T_NAME';
{t_name}				return 'T_NAME';

"<-"					return 'ARROW';
/* < = */
"<="					return 'ARROW_D';
"¿"						return 'LQM';
"{"						return 'LBRACE';
"}"						return 'RBRACE';
":"						return 'COLON';
";"						return "SEMI_COLON";
"¿"						return 'LQM';
"?"						return 'RQM';
"+"						return 'PLUS';
"*"						return 'TIMES';
"("						return 'LPAREN';
")"						return 'RPAREN';
"|" 					return 'PLECA';
"[0-9]"					return 'EXP_NUMS';
"[aA-zZ]"				return 'EXP_LETTERS';

{reserved_word}			return 'R_WORD';
{comment}				/* Ignore */
{whitespace}			/* Ignore */

{inputNoSpace}			return 'INPUT_N';

<<EOF>>					return 'EOF';
.
	%{
		console.log(`Error lexico ${yytext}`);
		return 'INVALID';
	%}

/lex

/* Imports */
%{
	// const Production = require('../../ts/production.js');
	// import {ProductionContainer} from '../../ts/productionContainer.js';
%}

/* associatios and precedence */

/* produccion inicial */
%start wison_struct

%%

wison_struct
	: wison EOF
		{
			return $1;
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
			$$ = $2;
		}
	;

make_term
	: terminal
	| make_term terminal
	;

make_non_t
	: no_terminal
	| make_non_t no_terminal
	;

terminal
	: TERM T_NAME ARROW opt SEMI_COLON
		{
			//$$ = $1 + " " + $2 + " " + $3 + " " + $4 + " " + $5;
			console.log(`Definicion terminal, linea ${this._$.first_line}, columna: ${this._$.first_column}`);
			$$ = $1;
		}
	| error
		{
			console.log(`Error ${yytext}, linea ${this._$.first_line} columna: ${this._$.first_column}`);
		}
	;

opt
	: make_concat
	| term
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
	;

term_option
	: R_WORD
	| EXP_NUMS
	| EXP_LETTERS
	;

quant
	: RQM
	| TIMES
	| PLUS
	| /* empty */
	;
/* Expresiones sin concatenacion */

no_terminal
	: NO_TERM NO_T_NAME SEMI_COLON
	{
		console.log(`Definicion no terminal, linea ${this._$.first_line}, columna: ${this._$.first_column}`);
	}
	| error
	;

initial_sim
	: INIT_SIMB NO_T_NAME SEMI_COLON
	{
		$$ = $2;
		console.log(`Definicion simbolo inicial, linea ${this._$.first_line}, columna: ${this._$.first_column}`);
	}
	;

make_prod
	: prod
	| make_prod prod
	;

prod
	: NO_T_NAME ARROW_D prod_body SEMI_COLON
	{
		console.log(`Produccion: ${$3}`);
		console.log(`Definicion de produccion, linea ${this._$.first_line}, columna: ${this._$.first_column}`);
	}
	;

prod_body
	: make_t_n_prod or_prod_
		{
			$$ = $1;
		}
	;

or_prod_
	: or_prod
	|
	;

or_prod
	: PLECA make_t_n_prod
	| or_prod PLECA make_t_n_prod
	;

make_t_n_prod
	: t_n_prod
		{
			$$ = [$1];
			console.log($$);
		}
	| make_t_n_prod t_n_prod
		{
			console.log($1);
			$$ = [...$1, $2];
		}
	;

t_n_prod
	: T_NAME
		{ $$ = $1; }
	| NO_T_NAME
		{ $$ = $1; }
	;
