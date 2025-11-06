import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('MD2PDF Exporter is now active!');

    // Register commands
    const exportCurrent = vscode.commands.registerCommand('md2pdf.exportCurrent', () => {
        vscode.window.showInformationMessage('Export current document to PDF');
    });

    const exportSelected = vscode.commands.registerCommand('md2pdf.exportSelected', (uri: vscode.Uri) => {
        vscode.window.showInformationMessage('Export selected documents to PDF');
    });

    const createConfig = vscode.commands.registerCommand('md2pdf.createConfig', () => {
        vscode.window.showInformationMessage('Create Configuration File');
    });

    context.subscriptions.push(exportCurrent, exportSelected, createConfig);
}

export function deactivate() {}
