import { InlineKeyboard } from "grammy"
import { type AnyContext } from "../utils/types.ts"
import { sendEditMessage } from "../utils/utils.ts"

export function portfolio(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("🌐 Сайты", "portfolio_websites")
        .text("🤖 Боты", "portfolio_bots")
        .row()
        .text("📱 Приложения", "portfolio_apps")
        .text("⚡ Разное", "portfolio_other")
        .row()
        .text("💬 Обсудить проект", "contacts")
        .text("⬅️ Назад", "start")

    const messageText =
        `🎨 *Мои работы*\n\n` +
        `Здесь собраны проекты, которые я создал.\n` +
        `Каждый — с душой и вниманием к деталям.\n\n` +
        `✨ *Выбери категорию:*`

    sendEditMessage(ctx, messageText, keyboard)
}

// 🌐 Сайты
export function portfolioWebsites(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .url("👀 Пример сайта", "https://kollusion.dev")
        .url("📁 Исходный код", "https://github.com/Kollusion")
        .row()
        .text("🤖 Боты", "portfolio_bots")
        .text("📱 Приложения", "portfolio_apps")
        .row()
        .text("💬 Заказать сайт", "contacts")
        .text("⬅️ Назад", "portfolio")

    const messageText =
        `🌐 *Сайты*\n\n` +
        `*Kollusion.dev* - мой личный сайт\n` +
        `Современный портфолио на Next.js\n\n` +
        `🛠 *Стек:* Next.js, React, TypeScript, Tailwind\n` +
        `🚀 *Особенности:* SSR, адаптивный дизайн, быстрая загрузка\n\n` +
        `*Лендинг для кофейни* (в разработке)\n` +
        `Элегантный сайт с онлайн-заказом\n\n` +
        `🛠 *Стек:* Next.js, Telegram Bot API, PostgreSQL\n` +
        `🎯 *Фичи:* форма бронирования, интеграция с Telegram`

    sendEditMessage(ctx, messageText, keyboard)
}

// 🤖 Боты
export function portfolioBots(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .url("🤖 Попробовать бота", "https://t.me/your_bot")
        .url("📁 Исходный код", "https://github.com/Kollusion")
        .row()
        .text("🌐 Сайты", "portfolio_websites")
        .text("📱 Приложения", "portfolio_apps")
        .row()
        .text("💬 Заказать бота", "contacts")
        .text("⬅️ Назад", "portfolio")

    const messageText =
        `🤖 *Telegram боты*\n\n` +
        `*Менеджер задач* - бот для продуктивности\n` +
        `Помогает организовать рабочий процесс\n\n` +
        `🛠 *Стек:* grammY, Node.js, Redis\n` +
        `🎯 *Фичи:* задачи, напоминания, категории\n\n` +
        `*Бот-консультант* - автоматизация ответов\n` +
        `Отвечает на частые вопросы клиентов\n\n` +
        `🛠 *Стек:* grammY, OpenAI API, PostgreSQL\n` +
        `🎯 *Фичи:* AI-ответы, база знаний, аналитика`

    sendEditMessage(ctx, messageText, keyboard)
}

// 📱 Приложения
export function portfolioApps(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .url("💻 Скачать приложение", "https://github.com/Kollusion")
        .url("📁 Исходный код", "https://github.com/Kollusion")
        .row()
        .text("🌐 Сайты", "portfolio_websites")
        .text("🤖 Боты", "portfolio_bots")
        .row()
        .text("💬 Заказать приложение", "contacts")
        .text("⬅️ Назад", "portfolio")

    const messageText =
        `📱 *Приложения*\n\n` +
        `*Мeteo App* - погодное приложение\n` +
        `Минималистичный дизайн, точные данные\n\n` +
        `🛠 *Стек:* TAURI, React, TypeScript\n` +
        `🎯 *Фичи:* геолокация, красивые графики\n\n` +
        `*TaskFlow* - менеджер задач\n` +
        `Простое и удобное управление проектами\n\n` +
        `🛠 *Стек:* Electron, React, SQLite\n` +
        `🎯 *Фичи:* офлайн-работа, синхронизация`

    sendEditMessage(ctx, messageText, keyboard)
}

// ⚡ Разное
export function portfolioOther(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .url("📚 GitHub", "https://github.com/Kollusion")
        .url("🛠️ Другие проекты", "https://kollusion.dev/projects")
        .row()
        .text("🌐 Сайты", "portfolio_websites")
        .text("🤖 Боты", "portfolio_bots")
        .row()
        .text("💬 Обсудить идею", "contacts")
        .text("⬅️ Назад", "portfolio")

    const messageText =
        `⚡ *Разные проекты*\n\n` +
        `*API для мобильного приложения*\n` +
        `Бэкенд с авторизацией и базой данных\n\n` +
        `🛠 *Стек:* Hono, PostgreSQL, JWT\n` +
        `🎯 *Фичи:* REST API, документация, тесты\n\n` +
        `*Парсер данных с сайтов*\n` +
        `Автоматический сбор и анализ информации\n\n` +
        `🛠 *Стек:* Node.js, Puppeteer, MongoDB\n` +
        `🎯 *Фичи:* регулярные обновления, экспорт в CSV\n\n` +
        `✨ *И многое другое на GitHub...*`

    sendEditMessage(ctx, messageText, keyboard)
}

// 🎯 Компактная версия портфолио (если нужно быстро показать)
export function portfolioQuick(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .url("🌐 Мой сайт", "https://kollusion.dev")
        .url("📚 GitHub", "https://github.com/Kollusion")
        .row()
        .text("📖 Подробное портфолио", "portfolio")
        .text("💬 Обсудить проект", "contacts")

    const messageText =
        `🎨 *Мои лучшие работы*\n\n` +
        `🌐 *Kollusion.dev* - современное портфолио\n` +
        `🤖 *Task Manager Bot* - бот для продуктивности\n` +
        `📱 *Meteo App* - погодное приложение\n` +
        `⚡ *Разные API и скрипты*\n\n` +
        `💡 *Полное портфолио и исходный код доступны на GitHub*`

    sendEditMessage(ctx, messageText, keyboard)
}