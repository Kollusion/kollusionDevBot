import { Context, type CommandContext, type CallbackQueryContext, } from "grammy"

export type AnyContext = CommandContext<Context> | CallbackQueryContext<Context>