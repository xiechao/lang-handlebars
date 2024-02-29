import { ContextTracker } from "@lezer/lr"
/* @ts-ignore */
import { spaces, newline, BlockComment } from "./parser.terms.js"

export const trackNewline = new ContextTracker({
    start: false,
    shift(context, term) {
        return term == BlockComment || term == spaces ? context : term == newline
    },
    strict: false
})