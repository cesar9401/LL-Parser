/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var wison = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,20],$V1=[1,19],$V2=[2,14,24],$V3=[1,29],$V4=[1,28],$V5=[2,43,45],$V6=[1,42],$V7=[1,49],$V8=[28,32],$V9=[1,55],$Va=[2,29],$Vb=[1,56],$Vc=[1,57],$Vd=[9,28,41,42],$Ve=[14,44],$Vf=[28,34],$Vg=[9,34,41,42],$Vh=[28,53],$Vi=[2,38],$Vj=[1,73],$Vk=[1,74],$Vl=[25,28,44,53];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"wison_struct":3,"wison":4,"EOF":5,"WISON":6,"LQM":7,"wison_body":8,"RQM":9,"lex_prod":10,"syntax_prod":11,"LEX":12,"LBRACE":13,"COLON":14,"make_term":15,"RBRACE":16,"SYNTX":17,"syntax_body":18,"make_non_t":19,"initial_sim":20,"make_prod":21,"terminal":22,"no_terminal":23,"TERM":24,"T_NAME":25,"ARROW":26,"opt":27,"SEMI_COLON":28,"make_concat":29,"term":30,"concat":31,"LPAREN":32,"term2":33,"RPAREN":34,"term_opt":35,"quant":36,"EXP_NUMS":37,"EXP_LETTERS":38,"term_option":39,"R_WORD":40,"TIMES":41,"PLUS":42,"NO_TERM":43,"NO_T_NAME":44,"INIT_SIMB":45,"prod":46,"ARROW_D":47,"prod_body":48,"make_t_n_prod__":49,"or_prod_":50,"make_t_n_prod":51,"or_prod":52,"PLECA":53,"t_n_prod":54,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"WISON",7:"LQM",9:"RQM",12:"LEX",13:"LBRACE",14:"COLON",16:"RBRACE",17:"SYNTX",24:"TERM",25:"T_NAME",26:"ARROW",28:"SEMI_COLON",32:"LPAREN",34:"RPAREN",37:"EXP_NUMS",38:"EXP_LETTERS",40:"R_WORD",41:"TIMES",42:"PLUS",43:"NO_TERM",44:"NO_T_NAME",45:"INIT_SIMB",47:"ARROW_D",53:"PLECA"},
productions_: [0,[3,2],[4,5],[8,2],[10,6],[11,8],[18,3],[15,1],[15,2],[19,1],[19,2],[22,5],[22,1],[27,1],[27,1],[29,1],[29,2],[31,3],[33,2],[35,1],[35,1],[35,1],[30,2],[39,1],[39,1],[39,1],[36,1],[36,1],[36,1],[36,0],[23,3],[23,1],[20,3],[21,1],[21,2],[46,4],[48,2],[49,1],[49,0],[50,1],[50,0],[52,2],[52,3],[51,1],[51,2],[54,1],[54,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

			return this.$;
		
break;
case 2:

			this.$ = $$[$0-2];
		
break;
case 3: case 39:

			this.$ = $$[$0];
		
break;
case 4:

			//console.log(`Terminales: ${$$[$0-2]}`);
		
break;
case 5:

			this.$ = $$[$0-3];
		
break;
case 6:

			console.log(`Productions ${$$[$0]}`);
			this.$ = new sintaxBody($$[$0-1], $$[$0-2], $$[$0]);
		
break;
case 7: case 9: case 33: case 41: case 43:

			this.$ = [$$[$0]];
		
break;
case 8: case 10: case 34: case 44:

			this.$ = [...$$[$0-1], $$[$0]];
		
break;
case 11:

			this.$ = new Terminal($$[$0-3], $$[$0-1][0], $$[$0-1][1], this._$.first_line, this._$.first_column);
			//console.log(`Terminal: ${$$[$0-3]} ${$$[$0-1][0]} ${$$[$0-1][1]}`);
		
break;
case 12:

			console.log(`Error ${yytext}, linea ${this._$.first_line} columna: ${this._$.first_column}`);
		
break;
case 14: case 23: case 24: case 25: case 26: case 27: case 28: case 37: case 45: case 46:
 this.$ = $$[$0]; 
break;
case 22:
 this.$ = [$$[$0-1], $$[$0]]; 
break;
case 29:
 this.$ = undefined; 
break;
case 30:

		//console.log(`Definicion no terminal, linea ${this._$.first_line}, columna: ${this._$.first_column}`);
		this.$ = new DefNoTerminal($$[$0-1], this._$.first_line, this._$.first_column);
	
break;
case 32:

		this.$ = new DefNoTerminal($$[$0-1], this._$.first_line, this._$.first_column);
	
break;
case 35:

		//console.log(`Production: ${$$[$0-3]} -> ${$$[$0-1]}`);
		this.$ = new Production($$[$0-3], $$[$0-1], this._$.first_line, this._$.first_column);
	
break;
case 36:

			if($$[$0]) {
				this.$ = [$$[$0-1], ...$$[$0]];
			} else {
				this.$ = [$$[$0-1]];
			}
		
break;
case 38:

			this.$ = ["lambda"];
		
break;
case 42:

			this.$ = [...$$[$0-2], $$[$0]];
		
break;
}
},
table: [{3:1,4:2,6:[1,3]},{1:[3]},{5:[1,4]},{7:[1,5]},{1:[2,1]},{8:6,10:7,12:[1,8]},{9:[1,9]},{11:10,17:[1,11]},{13:[1,12]},{6:[1,13]},{9:[2,3]},{13:[1,14]},{14:[1,15]},{5:[2,2]},{13:[1,16]},{2:$V0,15:17,22:18,24:$V1},{14:[1,21]},{2:$V0,14:[1,22],22:23,24:$V1},o($V2,[2,7]),{25:[1,24]},o($V2,[2,12]),{2:$V3,18:25,19:26,23:27,43:$V4},{16:[1,30]},o($V2,[2,8]),{26:[1,31]},{14:[1,32]},{2:$V3,20:33,23:34,43:$V4,45:[1,35]},o($V5,[2,9]),{44:[1,36]},o($V5,[2,31]),{17:[2,4]},{27:37,29:38,30:39,31:40,32:$V6,37:[1,44],38:[1,45],39:41,40:[1,43]},{16:[1,46]},{21:47,44:$V7,46:48},o($V5,[2,10]),{44:[1,50]},{28:[1,51]},{28:[1,52]},{28:[2,13],31:53,32:$V6},{28:[2,14]},o($V8,[2,15]),{9:$V9,28:$Va,36:54,41:$Vb,42:$Vc},{25:[1,60],33:58,35:59,37:[1,61],38:[1,62]},o($Vd,[2,23]),o($Vd,[2,24]),o($Vd,[2,25]),{16:[1,63]},{14:[2,6],44:$V7,46:64},o($Ve,[2,33]),{47:[1,65]},{28:[1,66]},o($V5,[2,30]),o($V2,[2,11]),o($V8,[2,16]),{28:[2,22]},o($Vf,[2,26]),o($Vf,[2,27]),o($Vf,[2,28]),{34:[1,67]},{9:$V9,34:$Va,36:68,41:$Vb,42:$Vc},o($Vg,[2,19]),o($Vg,[2,20]),o($Vg,[2,21]),{9:[2,5]},o($Ve,[2,34]),o($Vh,$Vi,{48:69,49:70,51:71,54:72,25:$Vj,44:$Vk}),{44:[2,32]},o($V8,[2,17]),{34:[2,18]},{28:[1,75]},{28:[2,40],50:76,52:77,53:[1,78]},o($Vh,[2,37],{54:79,25:$Vj,44:$Vk}),o($Vl,[2,43]),o($Vl,[2,45]),o($Vl,[2,46]),o($Ve,[2,35]),{28:[2,36]},{28:[2,39],53:[1,80]},o($Vh,$Vi,{51:71,54:72,49:81,25:$Vj,44:$Vk}),o($Vl,[2,44]),o($Vh,$Vi,{51:71,54:72,49:82,25:$Vj,44:$Vk}),o($Vh,[2,41]),o($Vh,[2,42])],
defaultActions: {4:[2,1],10:[2,3],13:[2,2],30:[2,4],39:[2,14],54:[2,22],63:[2,5],66:[2,32],68:[2,18],76:[2,36]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};


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

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 6;
break;
case 1:return 24;
break;
case 2:return 12;
break;
case 3:return 17;
break;
case 4:return 43;
break;
case 5:return 45;
break;
case 6:return 44;
break;
case 7:return 25;
break;
case 8:return 26;
break;
case 9:return 47;
break;
case 10:return 7;
break;
case 11:return 13;
break;
case 12:return 16;
break;
case 13:return 14;
break;
case 14:return "SEMI_COLON";
break;
case 15:return 7;
break;
case 16:return 9;
break;
case 17:return 42;
break;
case 18:return 41;
break;
case 19:return 32;
break;
case 20:return 34;
break;
case 21:return 53;
break;
case 22:return 37;
break;
case 23:return 38;
break;
case 24:return 40;
break;
case 25:/* Ignore */
break;
case 26:/* Ignore */
break;
case 27:return 'INPUT_N';
break;
case 28:return 5;
break;
case 29:
		console.log(`Error lexico ${yy_.yytext}`);
		return 'INVALID';
	
break;
}
},
rules: [/^(?:Wison\b)/,/^(?:Terminal\b)/,/^(?:Lex\b)/,/^(?:Syntax\b)/,/^(?:No_Terminal\b)/,/^(?:Initial_Sim\b)/,/^(?:(%_\w+))/,/^(?:(\$_\w+))/,/^(?:<-)/,/^(?:<=)/,/^(?:¿)/,/^(?:\{)/,/^(?:\})/,/^(?::)/,/^(?:;)/,/^(?:¿)/,/^(?:\?)/,/^(?:\+)/,/^(?:\*)/,/^(?:\()/,/^(?:\))/,/^(?:\|)/,/^(?:\[0-9\])/,/^(?:\[aA-zZ\])/,/^(?:(‘([^\n\r])+’))/,/^(?:((#([^\n\r])*(\r|\n|\r\n)?)|(\/\*\*(([^*]|\*+[^/*])*)\*+\/)))/,/^(?:((\r|\n|\r\n)|[\s\t\f]))/,/^(?:([^\n\r\s\t\f]+))/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = wison;
exports.Parser = wison.Parser;
exports.parse = function () { return wison.parse.apply(wison, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}