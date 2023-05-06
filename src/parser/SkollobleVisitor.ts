// Generated from ../grammar/antlr4/Skolloble.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./SkollobleParser";
import { ElementContext } from "./SkollobleParser";
import { AttributionContext } from "./SkollobleParser";
import { BlockContext } from "./SkollobleParser";
import { AttributeContext } from "./SkollobleParser";
import { NameContext } from "./SkollobleParser";
import { BacknamespaceContext } from "./SkollobleParser";
import { ForenamespaceContext } from "./SkollobleParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SkollobleParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SkollobleVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SkollobleParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `SkollobleParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SkollobleParser.attribution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribution?: (ctx: AttributionContext) => Result;

	/**
	 * Visit a parse tree produced by `SkollobleParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SkollobleParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `SkollobleParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `SkollobleParser.backnamespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBacknamespace?: (ctx: BacknamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `SkollobleParser.forenamespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForenamespace?: (ctx: ForenamespaceContext) => Result;
}

