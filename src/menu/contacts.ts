import { InlineKeyboard } from "grammy"
import { type AnyContext } from "../utils/types.ts"
import { sendEditMessage } from "../utils/utils.ts"

export function contacts(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .url("💬 Написать в Telegram", "https://t.me/kollusion_dev")
        .url("📢 Telegram канал", "https://t.me/kollusion_channel")
        .row()
        .text("⬅️ Назад", "start")

    const messageText =
        `💬 *Контакты*\n\n` +
        `🕒 *Время ответа:* 1-2 часа\n` +
        `🌙 *Рабочие часы:* 10:00 - 22:00 по МСК\n` +
        `💬 *Формат:* личные сообщения\n\n` +
        `*Что обсудим в Telegram:*\n` +
        `• Детали вашего проекта\n` +
        `• Консультацию по технологиям\n` +
        `• Срочные вопросы и правки\n` +
        `• Быстрые задачи и доработки\n\n` +
        `*Нажмите кнопку ниже чтобы написать:*`

    sendEditMessage(ctx, messageText, keyboard)
}