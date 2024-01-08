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
    })
  ],
  wrap: parseMixed(node => {
    const matchContext = node.matchContext(['Exp', 'Escape',
      'HelperExp', 'EscapedExp', 'HelperOpenExp', 'HelperCloseExp',
      'InlineHelperExp']);
    // console.log({ node });
    let shouldOverlay = (n: any) => {
      console.log('=========', n.type.name, '=========')
      let res = false;
      let parent = n.prevSibling;
      while (parent) {
        console.log({ parent: parent });
        parent = parent.prevSibling;
      }
      return res;
    };
    return {
      parser: htmlLanguage.parser,
      overlay: node => shouldOverlay(node)
    }
  })
})

export const handlebarsLanguage = LRLanguage.define({ parser: mixedParser })