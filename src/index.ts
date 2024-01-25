import { parser } from "./syntax.grammar"
import { htmlLanguage } from "@codemirror/lang-html"
import { foldNodeProp, foldInside, indentNodeProp, LRLanguage } from "@codemirror/language"
import { parseMixed } from "@lezer/common";

const mixedParser = parser.configure({
  props: [
    // Add basic folding/indent metadata
    foldNodeProp.add({ Conditional: foldInside }),
    indentNodeProp.add({
      Conditional: cx => {
        let closed = /^\s*\{% endif/.test(cx.textAfter)
        return cx.lineIndent(cx.node.from) + (closed ? 0 : cx.unit)
      }
    }),

  ],
  wrap: parseMixed(node => {
    return node.type.isTop ? {
      parser: htmlLanguage.parser,
      overlay: node => node.type.name == "Text"
    } : null
  })
})

export const handlebarsLanguage = LRLanguage.define({ parser: mixedParser })