import { InlineKeyboard } from "grammy"
import { type AnyContext } from "../utils/types.ts"
import { sendEditMessage } from "../utils/utils.ts"

export function about(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("🛠 Стек", "about_stack")
        .row()
        .text("📋 Условия и способы оплаты 💳", "terms")
        .row()
        .text("⬅️ Назад", "start")

    const messageText =
        `ℹ️ *Информация*\n\n` +
        `Здесь вы можете узнать подробности о моей работе, технологиях и процессе разработки.\n\n` +
        `Выберите интересующий раздел:`

    sendEditMessage(ctx, messageText, keyboard)
}

export function aboutWho(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("🛠 Стек", "about_stack")
        .text("⬅️ Назад", "about")

    const messageText =
        `👨‍💻 *Кто я*\n\n` +
        `Я Kollusion - fullstack разработчик с 2-летним опытом.\n\n` +
        `🎯 *Специализация:*\n` +
        `• Современная веб-разработка\n` +
        `• Telegram боты и автоматизация\n` +
        `• Кроссплатформенные приложения\n\n` +
        `💡 *Подход:*\n` +
        `• Чистый и поддерживаемый код\n` +
        `• Современные технологии\n` +
        `• Внимание к деталям\n` +
        `• Полный цикл разработки`

    sendEditMessage(ctx, messageText, keyboard)
}

export function aboutStack(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("⬅️ Назад", "about")

    const messageText =
        `🛠 *Мой стек технологий*\n\n` +
        `🌐 *Frontend:*\n` +
        `Next.js, React, TypeScript, Tailwind, Astro, Shadcn/ui\n\n` +
        `⚙️ *Backend:*\n` +
        `Node.js, Hono, tRPC, MongoDB, Redis\n\n` +
        `🤖 *Боты:*\n` +
        `grammY, Telegram Bot API\n\n` +
        `💻 *Десктоп:*\n` +
        `TAURI, Electron\n\n` +
        `📱 *Мобильные:*\n` +
        `Capacitor, React Native\n\n` +
        `🔧 *Инструменты:*\n` +
        `Git, Docker, Vercel, Netlify, Bun`

    sendEditMessage(ctx, messageText, keyboard)
}