import { type AnyContext } from "./types.ts"
import { type CallbackQueryContext, Context, InlineKeyboard } from "grammy"

export function isCallbackQueryContext(ctx: AnyContext): ctx is CallbackQueryContext<Context> {
    return 'callbackQuery' in ctx && ctx.callbackQuery !== undefined
}

export function sendEditMessage(ctx: AnyContext, messageText: string, keyboard: InlineKeyboard) {
    if (isCallbackQueryContext(ctx)) {
        return ctx.editMessageText(messageText, {
            parse_mode: "Markdown",
            reply_markup: keyboard
        })
    } else {
        return ctx.reply(messageText, {
            parse_mode: "Markdown",
            reply_markup: keyboard
        })
    }
}