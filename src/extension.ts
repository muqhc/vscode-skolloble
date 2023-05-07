import * as vscode from 'vscode';
import { SkollobleTokenProvider } from './provider/SkollobleTokenProvider';

export function activate(context: vscode.ExtensionContext) {
	new SkollobleTokenProvider().register(context);
}

export function deactivate() {}

