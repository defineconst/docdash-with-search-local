# docdash-with-search
[![npm package](https://img.shields.io/npm/v/docdash-with-search.svg)](https://www.npmjs.com/package/docdash-with-search) [![license](https://img.shields.io/npm/l/docdash-with-search.svg)](LICENSE.md)

A clean, responsive documentation template theme with search for JSDoc 3 based on [`Docdash`](https://github.com/clenemt/docdash).

![docdash-screenshot-overview](https://geekhal.cn/docdash-with-search/overview.png)

![docdash-screenshot-with-search](https://geekhal.cn/docdash-with-search/overview_search.png)

## Example
See https://geekhal.cn/docdash-with-search/ for a sample demo. :rocket:

## Install

```bash
$ npm install docdash-with-search
```

## Usage
Clone repository to your designated `jsdoc` template directory, then:

```bash
$ jsdoc entry-file.js -t path/to/docdash-with-search
```

or

```bash
$ jsdoc -c jsdoc.conf.json -t path/to/docdash-with-search
```

## Usage (npm)
In your projects `package.json` file add a new script:

```json
"script": {
  "generate-docs": "node_modules/.bin/jsdoc -c jsdoc.json"
}
```

In your `jsdoc.json` file, add a template option.

```json
"opts": {
  "template": "node_modules/docdash-with-search"
}
```

## Sample `jsdoc.conf.json`
See the config file for the [fixtures](fixtures/fixtures.conf.json) or the sample below.

```json
{
    "tags": {
        "allowUnknownTags": true
    },
    "source": {
        "include": [
            "fixtures/",
            "./README.md"
        ]
    },
    "plugins": ["plugins/markdown"],
    "opts": {
        "encoding": "utf8",
        "template": "./",
        "destination": "../fixtures-doc/",
        "recurse": true,
        "verbose": true
    },
    "markdown": {
        "parser": "gfm",
        "hardwrap": true
    },
    "templates": {
        "search": true,
        "cleverLinks": false,
        "monospaceLinks": false,
        "default": {
            "outputSourceFiles": true,
            "includeDate": false
        },
        "scripts": [],
        "favicon": "",
        "css": []
    },
    "docdash": {
        "static": false,
        "sort": true
    }
}
```

## Options
Docdash supports the following options:

```
{
    "docdash": {
        "static": [false|true],  // Display the static members inside the navbar.
        "sort": [false|true]     // Sort the methods in the navbar.
    },
    "templates": {
        "search": [false|true], // Display the search input element inside the navbar.
        "scripts": [], // Script files' URLs will be added to the html files orderly with script elements.
        "favicon": "", // The favicon's URL.
        "css": [] // Css files' URLs will be added be added to the html files orderly with link elements.
    }
}
```

Place them anywhere inside your `jsdoc.json` file.

## Change Logs
### v0.1.4(2018/08/09)
- Optimized the search function.

### v0.1.3(2018/08/08)
- Bugfix.

### v0.1.2(2018/08/08)
- Bugfix.

### v0.1.1(2018/08/08)
- Optimized the link elements' click event.

### v0.1.0(2018/08/08)
- Added supports for searching by comment or name.
- Added auto-complete function to the input element.

### v0.0.2(2018/08/07)
First version.

## License
Licensed under the Apache License, version 2.0. (see [Apache-2.0](LICENSE.md)).
