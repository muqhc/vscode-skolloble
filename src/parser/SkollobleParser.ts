// Generated from ../grammar/antlr4/Skolloble.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SkollobleListener } from "./SkollobleListener";
import { SkollobleVisitor } from "./SkollobleVisitor";


export class SkollobleParser extends Parser {
	public static readonly NEWLINE = 1;
	public static readonly Space = 2;
	public static readonly INTOATTR = 3;
	public static readonly BackNamespaceSign = 4;
	public static readonly ForeNamespaceSign = 5;
	public static readonly ID = 6;
	public static readonly WholeWrap = 7;
	public static readonly SingleBlock = 8;
	public static readonly NoBlock = 9;
	public static readonly GoOutBLOCK = 10;
	public static readonly INTOBLOCK = 11;
	public static readonly STRING = 12;
	public static readonly Comment = 13;
	public static readonly RULE_file = 0;
	public static readonly RULE_element = 1;
	public static readonly RULE_attribution = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_attribute = 4;
	public static readonly RULE_name = 5;
	public static readonly RULE_backnamespace = 6;
	public static readonly RULE_forenamespace = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "element", "attribution", "block", "attribute", "name", "backnamespace", 
		"forenamespace",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "':'", "'@'", "'<>'", undefined, "'/'", 
		"'-'", "';'", "'}'", "'{'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NEWLINE", "Space", "INTOATTR", "BackNamespaceSign", "ForeNamespaceSign", 
		"ID", "WholeWrap", "SingleBlock", "NoBlock", "GoOutBLOCK", "INTOBLOCK", 
		"STRING", "Comment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SkollobleParser._LITERAL_NAMES, SkollobleParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SkollobleParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Skolloble.g4"; }

	// @Override
	public get ruleNames(): string[] { return SkollobleParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SkollobleParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SkollobleParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SkollobleParser.RULE_file);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.element();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SkollobleParser.RULE_element);
		let _la: number;
		try {
			this.state = 25;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SkollobleParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 18;
				this.name();
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SkollobleParser.INTOATTR) {
					{
					this.state = 19;
					this.attribution();
					}
				}

				this.state = 22;
				this.block();
				}
				break;
			case SkollobleParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 24;
				this.match(SkollobleParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribution(): AttributionContext {
		let _localctx: AttributionContext = new AttributionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SkollobleParser.RULE_attribution);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.match(SkollobleParser.INTOATTR);
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 28;
				this.attribute();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SkollobleParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SkollobleParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SkollobleParser.INTOBLOCK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 33;
				this.match(SkollobleParser.INTOBLOCK);
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SkollobleParser.ID || _la === SkollobleParser.STRING) {
					{
					{
					this.state = 34;
					this.element();
					}
					}
					this.state = 39;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 40;
				this.match(SkollobleParser.GoOutBLOCK);
				}
				break;
			case SkollobleParser.WholeWrap:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.match(SkollobleParser.WholeWrap);
				this.state = 43;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 42;
						this.element();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 45;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SkollobleParser.SingleBlock:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 47;
				this.match(SkollobleParser.SingleBlock);
				this.state = 48;
				this.element();
				}
				break;
			case SkollobleParser.NoBlock:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.match(SkollobleParser.NoBlock);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SkollobleParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.name();
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SkollobleParser.STRING) {
				{
				this.state = 53;
				this.match(SkollobleParser.STRING);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SkollobleParser.RULE_name);
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.match(SkollobleParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.match(SkollobleParser.ID);
				this.state = 58;
				this.backnamespace();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 59;
				this.forenamespace();
				this.state = 60;
				this.match(SkollobleParser.ID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public backnamespace(): BacknamespaceContext {
		let _localctx: BacknamespaceContext = new BacknamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SkollobleParser.RULE_backnamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(SkollobleParser.BackNamespaceSign);
			this.state = 65;
			this.match(SkollobleParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forenamespace(): ForenamespaceContext {
		let _localctx: ForenamespaceContext = new ForenamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SkollobleParser.RULE_forenamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(SkollobleParser.ID);
			this.state = 68;
			this.match(SkollobleParser.ForeNamespaceSign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0FI\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\x17" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x04\x03\x04\x06\x04" +
		" \n\x04\r\x04\x0E\x04!\x03\x05\x03\x05\x07\x05&\n\x05\f\x05\x0E\x05)\v" +
		"\x05\x03\x05\x03\x05\x03\x05\x06\x05.\n\x05\r\x05\x0E\x05/\x03\x05\x03" +
		"\x05\x03\x05\x05\x055\n\x05\x03\x06\x03\x06\x05\x069\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07A\n\x07\x03\b\x03\b\x03\b" +
		"\x03\t\x03\t\x03\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x02\x02\x02K\x02\x12\x03\x02\x02\x02\x04\x1B" +
		"\x03\x02\x02\x02\x06\x1D\x03\x02\x02\x02\b4\x03\x02\x02\x02\n6\x03\x02" +
		"\x02\x02\f@\x03\x02\x02\x02\x0EB\x03\x02\x02\x02\x10E\x03\x02\x02\x02" +
		"\x12\x13\x05\x04\x03\x02\x13\x03\x03\x02\x02\x02\x14\x16\x05\f\x07\x02" +
		"\x15\x17\x05\x06\x04\x02\x16\x15\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02" +
		"\x17\x18\x03\x02\x02\x02\x18\x19\x05\b\x05\x02\x19\x1C\x03\x02\x02\x02" +
		"\x1A\x1C\x07\x0E\x02\x02\x1B\x14\x03\x02\x02\x02\x1B\x1A\x03\x02\x02\x02" +
		"\x1C\x05\x03\x02\x02\x02\x1D\x1F\x07\x05\x02\x02\x1E \x05\n\x06\x02\x1F" +
		"\x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02" +
		"\x02\x02\"\x07\x03\x02\x02\x02#\'\x07\r\x02\x02$&\x05\x04\x03\x02%$\x03" +
		"\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(" +
		"*\x03\x02\x02\x02)\'\x03\x02\x02\x02*5\x07\f\x02\x02+-\x07\t\x02\x02," +
		".\x05\x04\x03\x02-,\x03\x02\x02\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02" +
		"/0\x03\x02\x02\x0205\x03\x02\x02\x0212\x07\n\x02\x0225\x05\x04\x03\x02" +
		"35\x07\v\x02\x024#\x03\x02\x02\x024+\x03\x02\x02\x0241\x03\x02\x02\x02" +
		"43\x03\x02\x02\x025\t\x03\x02\x02\x0268\x05\f\x07\x0279\x07\x0E\x02\x02" +
		"87\x03\x02\x02\x0289\x03\x02\x02\x029\v\x03\x02\x02\x02:A\x07\b\x02\x02" +
		";<\x07\b\x02\x02<A\x05\x0E\b\x02=>\x05\x10\t\x02>?\x07\b\x02\x02?A\x03" +
		"\x02\x02\x02@:\x03\x02\x02\x02@;\x03\x02\x02\x02@=\x03\x02\x02\x02A\r" +
		"\x03\x02\x02\x02BC\x07\x06\x02\x02CD\x07\b\x02\x02D\x0F\x03\x02\x02\x02" +
		"EF\x07\b\x02\x02FG\x07\x07\x02\x02G\x11\x03\x02\x02\x02\n\x16\x1B!\'/" +
		"48@";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SkollobleParser.__ATN) {
			SkollobleParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SkollobleParser._serializedATN));
		}

		return SkollobleParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SkollobleParser.RULE_file; }
	// @Override
	public enterRule(listener: SkollobleListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: SkollobleListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SkollobleVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public attribution(): AttributionContext | undefined {
		return this.tryGetRuleContext(0, AttributionContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SkollobleParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SkollobleParser.RULE_element; }
	// @Override
	public enterRule(listener: SkollobleListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: SkollobleListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SkollobleVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributionContext extends ParserRuleContext {
	public INTOATTR(): TerminalNode { return this.getToken(SkollobleParser.INTOATTR, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SkollobleParser.RULE_attribution; }
	// @Override
	public enterRule(listener: SkollobleListener): void {
		if (listener.enterAttribution) {
			listener.enterAttribution(this);
		}
	}
	// @Override
	public exitRule(listener: SkollobleListener): void {
		if (listener.exitAttribution) {
			listener.exitAttribution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SkollobleVisitor<Result>): Result {
		if (visitor.visitAttribution) {
			return visitor.visitAttribution(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public INTOBLOCK(): TerminalNode | undefined { return this.tryGetToken(SkollobleParser.INTOBLOCK, 0); }
	public GoOutBLOCK(): TerminalNode | undefined { return this.tryGetToken(SkollobleParser.GoOutBLOCK, 0); }
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public WholeWrap(): TerminalNode | undefined { return this.tryGetToken(SkollobleParser.WholeWrap, 0); }
	public SingleBlock(): TerminalNode | undefined { return this.tryGetToken(SkollobleParser.SingleBlock, 0); }
	public NoBlock(): TerminalNode | undefined { return this.tryGetToken(SkollobleParser.NoBlock, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SkollobleParser.RULE_block; }
	// @Override
	public enterRule(listener: SkollobleListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SkollobleListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SkollobleVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SkollobleParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SkollobleParser.RULE_attribute; }
	// @Override
	public enterRule(listener: SkollobleListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: SkollobleListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SkollobleVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SkollobleParser.ID, 0); }
	public backnamespace(): BacknamespaceContext | undefined {
		return this.tryGetRuleContext(0, BacknamespaceContext);
	}
	public forenamespace(): ForenamespaceContext | undefined {
		return this.tryGetRuleContext(0, ForenamespaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SkollobleParser.RULE_name; }
	// @Override
	public enterRule(listener: SkollobleListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: SkollobleListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SkollobleVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BacknamespaceContext extends ParserRuleContext {
	public BackNamespaceSign(): TerminalNode { return this.getToken(SkollobleParser.BackNamespaceSign, 0); }
	public ID(): TerminalNode { return this.getToken(SkollobleParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SkollobleParser.RULE_backnamespace; }
	// @Override
	public enterRule(listener: SkollobleListener): void {
		if (listener.enterBacknamespace) {
			listener.enterBacknamespace(this);
		}
	}
	// @Override
	public exitRule(listener: SkollobleListener): void {
		if (listener.exitBacknamespace) {
			listener.exitBacknamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SkollobleVisitor<Result>): Result {
		if (visitor.visitBacknamespace) {
			return visitor.visitBacknamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForenamespaceContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SkollobleParser.ID, 0); }
	public ForeNamespaceSign(): TerminalNode { return this.getToken(SkollobleParser.ForeNamespaceSign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SkollobleParser.RULE_forenamespace; }
	// @Override
	public enterRule(listener: SkollobleListener): void {
		if (listener.enterForenamespace) {
			listener.enterForenamespace(this);
		}
	}
	// @Override
	public exitRule(listener: SkollobleListener): void {
		if (listener.exitForenamespace) {
			listener.exitForenamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SkollobleVisitor<Result>): Result {
		if (visitor.visitForenamespace) {
			return visitor.visitForenamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


