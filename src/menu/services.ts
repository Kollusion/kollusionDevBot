import { InlineKeyboard } from "grammy"
import { type AnyContext } from "../utils/types.ts"
import { sendEditMessage } from "../utils/utils.ts"

// Примерный курс для конвертации (можно менять)
const USD_RATE = 100 // 1$ = 100₽

function formatPrice(rub: number): string {
    const usd = Math.round(rub / USD_RATE)
    return `от ${rub.toLocaleString('ru-RU')} ₽ / $${usd}`
}

export function services(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("🌐 Сайты", "services_web")
        .text("🤖 Боты", "services_bots")
        .row()
        .text("📱 Приложения", "services_apps")
        .text("⚡ Скрипты", "services_scripts")
        .row()
        .text("🔧 Помощь", "services_help")
        .row()
        .text("⬅️ Назад", "start")

    const messageText =
        `🚀 *Чем могу помочь?*\n\n` +
        `Я fullstack-разработчик, создаю digital-продукты под ключ.\n\n` +
        `🌐 *Сайты* - от лендингов до интернет-магазинов\n` +
        `🤖 *Боты* - автоматизация для Telegram\n` +
        `📱 *Приложения* - десктоп и мобильные\n` +
        `⚡ *Скрипты* - автоматизация рутины\n` +
        `🔧 *Помощь* - доработки и исправления\n\n` +
        `Выбери категорию, чтобы узнать подробности:`

    sendEditMessage(ctx, messageText, keyboard)
}

// 🌐 Сайты
export function servicesWeb(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("💬 Обсудить проект", "contacts")
        .text("⬅️ Назад", "services")

    const messageText =
        `🌐 *Сайты*\n\n` +
        `Создаю современные и быстрые сайты на Next.js:\n\n` +
        `📄 *Лендинг* | ${formatPrice(15000)}\n` +
        `Одностраничник для твоего проекта\n\n` +
        `🛍️ *Интернет-магазин* | ${formatPrice(60000)}\n` +
        `Каталог, корзина, онлайн-оплата\n\n` +
        `⚡ *Веб-приложение* | ${formatPrice(80000)}\n` +
        `Сложная логика, база данных, API\n\n` +
        `🏢 *Корпоративный сайт* | ${formatPrice(40000)}\n` +
        `Многостраничник с админкой\n\n` +
        `💡 *Что входит:*\n` +
        `• Адаптивный дизайн\n` +
        `• SEO-оптимизация\n` +
        `• Хостинг и домен\n` +
        `• Обучение управлению`

    sendEditMessage(ctx, messageText, keyboard)
}

// 🤖 Боты
export function servicesBots(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("💬 Обсудить проект", "contacts")
        .text("⬅️ Назад", "services")

    const messageText =
        `🤖 *Telegram боты*\n\n` +
        `Разрабатываю умных ботов на grammY:\n\n` +
        `🛒 *Для бизнеса* | ${formatPrice(25000)}\n` +
        `Прием заказов, уведомления\n\n` +
        `🎮 *Развлекательные* | ${formatPrice(15000)}\n` +
        `Игры, викторины, контент\n\n` +
        `📊 *С аналитикой* | ${formatPrice(35000)}\n` +
        `Сбор данных, отчеты, статистика\n\n` +
        `🔗 *Интеграторы* | ${formatPrice(30000)}\n` +
        `Связка с другими сервисами\n\n` +
        `💡 *Что умеют мои боты:*\n` +
        `• Интерактивные меню\n` +
        `• Работа с медиа\n` +
        `• База пользователей\n` +
        `• Веб-панель управления`

    sendEditMessage(ctx, messageText, keyboard)
}

// 📱 Приложения
export function servicesApps(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("💬 Обсудить проект", "contacts")
        .text("⬅️ Назад", "services")

    const messageText =
        `📱 *Приложения*\n\n` +
        `Создаю приложения для разных платформ:\n\n` +
        `💻 *Десктоп* | ${formatPrice(40000)}\n` +
        `Для Windows, macOS, Linux\n\n` +
        `📱 *Мобильные* | ${formatPrice(50000)}\n` +
        `iOS и Android\n\n` +
        `🌐 *PWA* | ${formatPrice(30000)}\n` +
        `Устанавливаются как нативные\n\n` +
        `🔄 *Кроссплатформенные* | ${formatPrice(70000)}\n` +
        `Один код - все платформы\n\n` +
        `💡 *Технологии:*\n` +
        `• TAURI / Electron\n` +
        `• Capacitor / React Native\n` +
        `• Нативные API\n` +
        `• Автообновления`

    sendEditMessage(ctx, messageText, keyboard)
}

// ⚡ Скрипты
export function servicesScripts(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("💬 Обсудить задачу", "contacts")
        .text("⬅️ Назад", "services")

    const messageText =
        `⚡ *Скрипты и автоматизация*\n\n` +
        `Помогаю избавиться от рутины:\n\n` +
        `📊 *Парсинг данных* | ${formatPrice(20000)}\n` +
        `Сбор информации с сайтов\n\n` +
        `🔄 *Автоматизация* | ${formatPrice(25000)}\n` +
        `Бизнес-процессы, интеграции\n\n` +
        `🔧 *Кастомные скрипты* | ${formatPrice(10000)}\n` +
        `Под конкретные задачи\n\n` +
        `🤖 *RPA* | ${formatPrice(40000)}\n` +
        `Автоматизация ручных операций\n\n` +
        `💡 *Что автоматизирую:*\n` +
        `• Сбор и обработка данных\n` +
        `• Интеграция сервисов\n` +
        `• Отчетность и аналитика\n` +
        `• Работа с файлами и API`

    sendEditMessage(ctx, messageText, keyboard)
}

// 🔧 Помощь
export function servicesHelp(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("💬 Написать о проблеме", "contacts")
        .text("⬅️ Назад", "services")

    const messageText =
        `🔧 *Техническая помощь*\n\n` +
        `Помогаю с существующими проектами:\n\n` +
        `🔧 *Доработки* | от 800 ₽ / $8 в час\n` +
        `Новый функционал, правки\n\n` +
        `🐛 *Исправление ошибок* | от 700 ₽ / $7 в час\n` +
        `Диагностика и решение проблем\n\n` +
        `⚡ *Оптимизация* | ${formatPrice(20000)}\n` +
        `Ускорение работы сайта/приложения\n\n` +
        `💼 *Консультации* | от 1 500 ₽ / $15 в час\n` +
        `Советы по технологиям и архитектуре\n\n` +
        `💡 *Что могу сделать:*\n` +
        `• Добавить новый функционал\n` +
        `• Исправить баги\n` +
        `• Ускорить загрузку\n` +
        `• Проконсультировать по коду`

    sendEditMessage(ctx, messageText, keyboard)
}