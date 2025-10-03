import { InlineKeyboard } from "grammy"
import { type AnyContext } from "../utils/types.ts"
import { sendEditMessage } from "../utils/utils.ts"

export function start(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("🚀 Услуги", "services")
        .row()
        .text("❔ Информация", "about")
        .text("💼 Портфолио", "portfolio")
        .row()
        .url("🌐 kollusion.dev", "https://kollusion.dev")
        .url("💻 GitHub", "https://github.com/Kollusion")
        .row()
        .text("📞 Связаться", "contacts")

    const messageText =
        `👋 *Добро пожаловать в Kollusion.dev* - цифровое пространство креативной разработки!\n\n` +

        `🎯 *Я занимаюсь полным циклом создания digital-продуктов:*\n` +
        `├ 🌐 Современные веб-приложения\n` +
        `├ 🤖 Умные Telegram боты\n` +
        `├ 📱 Кроссплатформенные приложения\n` +
        `└ ⚙️ Автоматизация бизнес-процессов\n\n` +

        `💫 *Что вы получите:*\n` +
        `✓ Чистый и поддерживаемый код\n` +
        `✓ Современные технологии и лучшие практики\n` +
        `✓ Внимание к деталям\n` +
        `✓ Полное сопровождение проекта\n\n` +

        `*Выберите раздел ниже или воспользуйтесь AI-консультантом для подбора оптимального решения ⬇️*`

    sendEditMessage(ctx, messageText, keyboard)
}