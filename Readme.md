# Successo NPM module example.

This is a **bootstrap** module for Successo NPM module. It has the predefined architecture and NPM task to build the module itself. In order to use this dummy module, you have to copy it as a new module naming it accordingly. You must edit package JSON adding all the needed depending libraries, change the author name and version number. After finishing creating the module please run the command `$ npm run build` to compile all the sources and move them to `dist` folder.

## Files & folders structure

```
Example_project
| README.md
| package.json
| index.js
|
├──── src
|   | index.js
|   |
|   ├──── components
|   |   | index.js
|   |   |
|   |   ├──── example
|   |   |   | component-1.js
|   |   |   | component-2.js
|   |   |   | index.js // exports component-1 & component-2
|
├──── tests
|
|
└─── build
```

## Tests
Tests are not integrated yet. Will update info about testing once i will integrate them. If you want to test your module feel free to investigate about **how to write test** in your own usecase. And do not forget to update the test sections in **README** file of your NPM module.

## Syntax and build
This bootstrap module is created for writing ES6 and compile them using babel. The build script uses babel to compile and build the sources into **dist** folder.

## Fiels and contents
* **index.js** - exports all the components that are bundeled in `./dist/index.js`. You should update manually **index.js** in the root of NPM module accordingly to your needs and components you want to export.
* **package.json** - contains description of project, info about author all the needed dependencies, and build script. In this demo module build script uses babel* to compoile ES6 and write outputs to `./build` folder.
* **README** - Contains all the needded description about each module and of course description of all components.

## How to use this DEMO
1. Copy it and rename accordingly to name of your module.
2. Edit **package.json** and add dependencies you need.
3. Run `$ npm i && npm i -g gulp`.
4. Start hacking in `./src` folder.
5. run `$ npm run build`.
6. Import this module (locally) in you project. Or publish it to NPM if you want so.

