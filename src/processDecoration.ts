import * as vscode from 'vscode';
import { ANTLRInputStream, CharStreams, CommonTokenStream, ParserRuleContext, Token } from 'antlr4ts';
import { SkollobleLexer } from './parser/SkollobleLexer';
import { FileContext, SkollobleParser } from './parser/SkollobleParser';
import { SkollobleListener } from './parser/SkollobleListener';

export function skollobleDecoration(context: vscode.ExtensionContext) {
    updateDecorations();
	vscode.workspace.onDidChangeTextDocument(updateDecorations);
    vscode.window.onDidChangeActiveTextEditor(updateDecorations);
}

const elementNameDecorationType = vscode.window.createTextEditorDecorationType({
    color: "#569CD6"
});

const namespaceDecorationType = vscode.window.createTextEditorDecorationType({
    color: "#4EC9B0"
});

const stringDecorationType = vscode.window.createTextEditorDecorationType({
    color: "#CE9178"
});

const attributeDecorationType = vscode.window.createTextEditorDecorationType({
    color: "#9CDCFE"
});

const errorDecorationType = vscode.window.createTextEditorDecorationType({
    color: "red"
});

const decoTypeSet = [
    elementNameDecorationType,
    namespaceDecorationType,
    stringDecorationType,
    attributeDecorationType,
    errorDecorationType
];

function updateDecorations() {

    const editor = vscode.window.activeTextEditor;
    if (editor) { undefined; } else { return 0; }

    if (editor.document.languageId !== "skolloble") { return; }

    
    const document = editor.document;
    const parser = parseDefault(document.getText());

    const decos: [vscode.TextEditorDecorationType,vscode.DecorationOptions][] = [];

    parser.addParseListener(<SkollobleListener>{
        exitElement(ctx) {
            let name = ctx.name();
            if (name){
                decos.push([elementNameDecorationType,makeOptionsFromSymbol(name.ID().symbol,document)]);
                return;
            }
            let string = ctx.STRING();
            if (string) {
                decos.push([stringDecorationType,makeOptionsFromSymbol(string.symbol,document)]);
            }
        },
        exitBacknamespace(ctx) {
            decos.push([namespaceDecorationType,makeOptionsFromSymbol(ctx.ID().symbol,document)]);
            decos.push([namespaceDecorationType,makeOptionsFromSymbol(ctx.BackNamespaceSign().symbol,document)]);
        },
        exitForenamespace(ctx) {
            decos.push([namespaceDecorationType,makeOptionsFromSymbol(ctx.ID().symbol,document)]);
            decos.push([namespaceDecorationType,makeOptionsFromSymbol(ctx.ForeNamespaceSign().symbol,document)]);
        },
        exitAttribute(ctx) {
            decos.push([attributeDecorationType,makeOptionsFromSymbol(ctx.name().ID().symbol,document)]);
            let string = ctx.STRING();
            if (string) {
                decos.push([stringDecorationType,makeOptionsFromSymbol(string.symbol,document)]);
            }
        },
    });

    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
            
        },
    });

    parser.file();


    const decoGroups = new Map<vscode.TextEditorDecorationType,vscode.DecorationOptions[]>();

    decoTypeSet.forEach(decoType => {
        decoGroups.set(decoType,[]);
    });

    decos.forEach(([decoType,options]) => {
        let optionsArray = decoGroups.get(decoType);
        if (optionsArray) {
            optionsArray.push(options);
        }
        else {
            decoGroups.set(decoType,[options]);
        }
    });

    decoGroups.forEach((value,key) => {
        editor.setDecorations(key,value);
    });

}

function parseDefault(text: string) {
    const inputStream = CharStreams.fromString(text);
	const lexer = new SkollobleLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new SkollobleParser(tokenStream);
	return parser;
}

function makeOptionsFromSymbol(symbol: Token, document: vscode.TextDocument) {
    return {
        range: new vscode.Range(document.positionAt(symbol.startIndex),document.positionAt(symbol.stopIndex+1))
    };
}