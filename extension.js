// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "lazy-toggle" is now active!');
    
    
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.initClock', () => {
        // The code you place here will be executed every time your command is executed
        this.showStatusBar = function() {
            this.statusBarItem.text = `$(triangle-right)  Start Clock`;
            this.statusBarItem.command = 'extension.startClock';
            this.statusBarItem.show();
        }

        this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        this.statusBarItem.text = `$(triangle-right)  yokev!`;
        this.showStatusBar();
    });

        // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.startClock', () => {
        // The code you place here will be executed every time your command is executed
        // this.statusBarItem.command = 'extension.stopClock';
        this.statusBarItem.text = `$(clock)  Stop Clock`;
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;