// Generated from ../grammar/antlr4/Skolloble.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./SkollobleParser";
import { ElementContext } from "./SkollobleParser";
import { AttributionContext } from "./SkollobleParser";
import { BlockContext } from "./SkollobleParser";
import { AttributeContext } from "./SkollobleParser";
import { NameContext } from "./SkollobleParser";
import { BacknamespaceContext } from "./SkollobleParser";
import { ForenamespaceContext } from "./SkollobleParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SkollobleParser`.
 */
export interface SkollobleListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SkollobleParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `SkollobleParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `SkollobleParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `SkollobleParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `SkollobleParser.attribution`.
	 * @param ctx the parse tree
	 */
	enterAttribution?: (ctx: AttributionContext) => void;
	/**
	 * Exit a parse tree produced by `SkollobleParser.attribution`.
	 * @param ctx the parse tree
	 */
	exitAttribution?: (ctx: AttributionContext) => void;

	/**
	 * Enter a parse tree produced by `SkollobleParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SkollobleParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `SkollobleParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `SkollobleParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `SkollobleParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `SkollobleParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `SkollobleParser.backnamespace`.
	 * @param ctx the parse tree
	 */
	enterBacknamespace?: (ctx: BacknamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `SkollobleParser.backnamespace`.
	 * @param ctx the parse tree
	 */
	exitBacknamespace?: (ctx: BacknamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `SkollobleParser.forenamespace`.
	 * @param ctx the parse tree
	 */
	enterForenamespace?: (ctx: ForenamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `SkollobleParser.forenamespace`.
	 * @param ctx the parse tree
	 */
	exitForenamespace?: (ctx: ForenamespaceContext) => void;
}

