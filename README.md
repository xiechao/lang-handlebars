# Handlebars Language CodeMirror 6

This package aims to provide [Handlebars language](https://handlebarsjs.com/) support to CodeMirror 6.

### Usage

To use this, simply install via NPM:

```
npm install @xiechao/codemirror-lang-handlebars
```

Then you can use it like so:

```javascript
import { handlebarsLanguage } from "@ssddanbrown/codemirror-lang-twig"

handlebarsLanguage // => https://codemirror.net/docs/ref/#language.LRLanguage
```

### Development

The following commands can be used for development:

```bash
# Prepare/Build the codebase
npm run prepare

# Test the codebase, must be prepared beforehand
npm t
```
