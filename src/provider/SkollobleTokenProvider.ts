import * as vscode from 'vscode';
import { ANTLRInputStream, CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { SkollobleLexer } from '../parser/SkollobleLexer';
import { SkollobleParser } from '../parser/SkollobleParser';
import { SkollobleListener } from '../parser/SkollobleListener';



// const elementNameDecorationType = vscode.window.createTextEditorDecorationType({
//     color: "#569CD6"
// });

// const namespaceDecorationType = vscode.window.createTextEditorDecorationType({
//     color: "#4EC9B0"
// });

// const stringDecorationType = vscode.window.createTextEditorDecorationType({
//     color: "#CE9178"
// });

// const attributeDecorationType = vscode.window.createTextEditorDecorationType({
//     color: "#9CDCFE"
// });

// const errorDecorationType = vscode.window.createTextEditorDecorationType({
//     color: "red"
// });

// const decoTypeSet = [
//     elementNameDecorationType,
//     namespaceDecorationType,
//     stringDecorationType,
//     attributeDecorationType,
//     errorDecorationType
// ];





export class SkollobleTokenProvider implements vscode.DocumentSemanticTokensProvider {

    readonly legend = new vscode.SemanticTokensLegend(
        Object.values(SkollobleTokenType).filter(it => typeof(it) === "string") as string[],
        []
    );

    provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens> {

        const builder = new vscode.SemanticTokensBuilder(this.legend);
        const text = document.getText();

        const parser = parseSkolloble(text);
        
        parser.addParseListener(skollobleListenerForBulidingTokens(document, builder));
        const root = parser.file();

        pushTokensForComment(document,builder);
        
        return builder.build();
    }

    register(context: vscode.ExtensionContext) {
        let disposable = vscode.languages.registerDocumentSemanticTokensProvider(
            { language: "skolloble" },this,this.legend
        );   
    }
}

enum SkollobleTokenType {
    string="string",
    tag="tag",
    attribute="attribute",
    namespace="namespace",
    comment="comment",
}

function skollobleListenerForBulidingTokens(document: vscode.TextDocument, builder: vscode.SemanticTokensBuilder): SkollobleListener {
    return <SkollobleListener> {
        exitElement(ctx) {
            let name = ctx.name();
            if (name){
                builder.push(makeRangeFromSymbol(name.ID().symbol, document), SkollobleTokenType.tag);
                return;
            }
            let string = ctx.STRING();
            if (string) {
                getMultilineTokenRanges(string.symbol.startIndex,string.text,document).forEach(range => {
                    builder.push(range,SkollobleTokenType.string);
                });
            }
        },
        exitBacknamespace(ctx) {
            builder.push(makeRangeFromSymbol(ctx.ID().symbol,document),SkollobleTokenType.namespace);
            builder.push(makeRangeFromSymbol(ctx.BackNamespaceSign().symbol,document),SkollobleTokenType.namespace);
        },
        exitForenamespace(ctx) {
            builder.push(makeRangeFromSymbol(ctx.ID().symbol,document),SkollobleTokenType.namespace);
            builder.push(makeRangeFromSymbol(ctx.ForeNamespaceSign().symbol,document),SkollobleTokenType.namespace);
        },
        exitAttribute(ctx) {
            builder.push(makeRangeFromSymbol(ctx.name().ID().symbol,document),SkollobleTokenType.attribute);
            let string = ctx.STRING();
            if (string) {
                getMultilineTokenRanges(string.symbol.startIndex,string.text,document).forEach(range => {
                    builder.push(range,SkollobleTokenType.string);
                });
            }
        },
    };
}

function getMultilineTokenRanges(startIndex: number, text: string, document: vscode.TextDocument) {
    const lines = text.split("\n");
    let stack = startIndex;
    return lines.map(line => {
        const range = new vscode.Range(document.positionAt(stack),document.positionAt(stack+line.length));
        stack += line.length + 1;
        return range;
    });
}

function pushTokensForComment(document: vscode.TextDocument, builder: vscode.SemanticTokensBuilder) {
    const regex = /\*[^*]*\*/gs;
    const text = document.getText();
    let match: RegExpExecArray | null;
    while (match = regex.exec(text)) {
        getMultilineTokenRanges(match.index,match[0],document).forEach(range => {
            builder.push(range,SkollobleTokenType.comment);
        });
    }
}

function parseSkolloble(text: string) {
    const inputStream = CharStreams.fromString(text);
	const lexer = new SkollobleLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new SkollobleParser(tokenStream);
	return parser;
}

function makeRangeFromSymbol(symbol: Token, document: vscode.TextDocument) {
    return new vscode.Range(document.positionAt(symbol.startIndex),document.positionAt(symbol.stopIndex+1));
}