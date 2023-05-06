import * as vscode from 'vscode';
import { skollobleDecoration } from './processDecoration';

export function activate(context: vscode.ExtensionContext) {
	skollobleDecoration(context);
}

export function deactivate() {}

