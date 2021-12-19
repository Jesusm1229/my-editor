const path = require('path');
const src = path.join(process.cwd(), 'src', 'electron');

module.exports = {
    entry: path.join(src, 'main.ts'),
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                configFile: path.join(src, 'tsconfig.json')
            }
        }]
    },
    target: 'electron-main'
};
/*
The preceding file configures webpack in our application using the following options:
• mode: Indicates that we are currently running in a development environment.
• devtool: Enables source map file generation for debugging purposes.
• entry: Indicates the main entry point of the Electron application, which is the
main.ts file.
• output: Defines the path and the filename of the Electron bundle that will be
generated from webpack. The path property points to the same folder that is
used from the Angular CLI to generate the bundle of the Angular application. The
filename property is set to shell.js because the default one generated from
webpack is main.js, and it will cause a conflict with the main.js file generated
from the Angular application.
• module: Instructs webpack to load the ts-loader plugin for handling
TypeScript files.
• target: Indicates that we are currently running in the main process of Electron.
*/
