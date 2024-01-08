# Twig Language CodeMirror 6

This package aims to provide [Twig language](https://twig.symfony.com/) support to CodeMirror 6.

**Advisory:** This has really just been created as a way to get highlighting support, with a goal of achieving good-enough alignment with the old official CodeMirror 5 twig syntax support. This will likely have bugs, omissions and won't have the full CodeMirror functionality feature-set. The fact that I've got as far as I have, attempting to use this mind-melting arcane language building system, is a miracle enough.

### Usage

To use this, simply install via NPM:

```
npm install @ssddanbrown/codemirror-lang-twig
```

Then you can use it like so:

```javascript
import { twig, twigLanguage } from "@ssddanbrown/codemirror-lang-twig"

twig() // => https://codemirror.net/docs/ref/#language.LanguageSupport
twigLanguage // => https://codemirror.net/docs/ref/#language.LRLanguage
```

### Development

The following commands can be used for development:

```bash
# Prepare/Build the codebase
npm run prepare

# Test the codebase, must be prepared beforehand
npm t
```

### Contribution

This is a low maintenance project. The scope of features and support are purposefully kept narrow for my purposes to ensure longer term maintenance is viable. Therefore I will be relatively strict on what issues and PRs I'm willing to accept.

**Issues:** - I'm only really looking to address issues in existing functionality we support. Please don't open issues for new edge-case bugs, syntax additions, usage-support-requests or language features to add.

**PRs:** - I'm happy to accept PRs that fix bugs, improve syntax support or add language features as long as they don't significantly increase the scope of things, they're covered with testing and the need/requirement is fully explained in the PR. You may open an issue if you need to discus anything, or validate acceptance before spending time, just make it clear you're intending to make a PR.

### Attribution

This project uses the [CodeMirror language package template](https://github.com/codemirror/lang-example), and I've also used various other CodeMirror default language projects as general guidance.

Many thanks to [Marijn Haverbeke](https://github.com/marijnh) for their work in developing and providing CodeMirror and everything that supports it.

### Useful Development Resources

These are resources I've found useful in building this:

- Simple JSON example: https://github.com/lezer-parser/json/blob/main/src/highlight.js
- An underscore matches all chars (https://discuss.codemirror.net/t/match-for-all-characters/4230).
- Guide: https://lezer.codemirror.net/docs/guide/
- Twig Guide: https://twig.symfony.com/doc/3.x/templates.html
- Twig fiddle, with existing syntax highlighting: https://twigfiddle.com/
- Old twig mode source: https://github.com/codemirror/codemirror5/blob/master/mode/twig/twig.js
