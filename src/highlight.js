import { styleTags, tags } from "@lezer/highlight"

export const Highlight = styleTags({
    "if endif": tags.controlKeyword,
    "{{ }}": tags.tagName,
    "{{{ }}}": tags.tagName,
    BIHelper: tags.keyword,
    Escape: tags.annotation,
    DirectiveContent: tags.variableName,
    BlockComment: tags.comment,
    OnelineComment: tags.comment,
    Number: tags.number,
    String: tags.string,
    Identifier: tags.variableName,
    "~ @": tags.atom,
});
