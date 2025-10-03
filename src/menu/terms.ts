import { InlineKeyboard } from "grammy"
import { type AnyContext } from "../utils/types.ts"
import { sendEditMessage } from "../utils/utils.ts"

export function terms(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("💳 Способы оплаты", "terms_methods")
        .text("📝 Условия", "terms_conditions")
        .row()
        .text("🔄 Возвраты", "terms_refunds")
        .text("❓ Вопросы", "terms_faq")
        .row()
        .text("💼 Связаться", "contacts")
        .text("⬅️ Назад", "about")

    const messageText =
        `📋 *Условия и способы оплаты* 💳\n\n` +
        `Здесь вы найдете всю информацию о финансовых условиях сотрудничества.\n\n` +
        `• 💳 Доступные способы оплаты\n` +
        `• 📝 Условия предоплаты и этапов\n` +
        `• 🔄 Политика возврата средств\n` +
        `• ❓ Ответы на частые вопросы`

    sendEditMessage(ctx, messageText, keyboard)
}

export function termsMethods(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("📝 Условия", "terms_conditions")
        .text("🔄 Возвраты", "terms_refunds")
        .row()
        .text("💼 Связаться", "contacts")
        .text("⬅️ Назад", "terms")

    const messageText =
        `💳 *Способы оплаты*\n\n` +
        `🇷🇺 *Для клиентов из России:*\n` +
        `•💰 ЮKassa\n` +
        `•💰 tome.ge\n\n` +
        `🌍 *Международные платежи:*\n` +
        `•💰 tome.ge\n` +
        `• ₿ Crypto (USDT, TON)\n\n` +
        `⚡ *Сроки зачисления:* 1-3 рабочих дня`

    sendEditMessage(ctx, messageText, keyboard)
}

export function termsConditions(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("💳 Способы оплаты", "terms_methods")
        .text("🔄 Возвраты", "terms_refunds")
        .row()
        .text("💼 Связаться", "contacts")
        .text("⬅️ Назад", "terms")

    const messageText =
        `📝 *Условия оплаты*\n\n` +
        `💰 *Предоплата:*\n` +
        `• Стандартная предоплата: *30-50%* от суммы\n` +
        `• Для проектов до *2 000 ₽*: *100%* предоплата\n` +
        `• Предоплата фиксирует сроки и условия\n\n` +
        `⏱ *Оплата по этапам:*\n` +
        `• Крупные проекты разбиваются на этапы\n` +
        `• Оплата после завершения каждого этапа\n` +
        `• Прозрачный контроль прогресса\n\n` +
        `📅 *Сроки оплаты:*\n` +
        `• Счет действует *3 рабочих дня*\n` +
        `• После оплаты - начало работ в течение *24 часов*\n` +
        `• Отсрочка оплаты обсуждается индивидуально\n\n`

    sendEditMessage(ctx, messageText, keyboard)
}

export function termsRefunds(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("📝 Условия", "terms_conditions")
        .text("❓ Вопросы", "terms_faq")
        .row()
        .text("💼 Связаться", "contacts")
        .text("⬅️ Назад", "terms")

    const messageText =
        `🔄 *Политика возврата средств*\n\n` +
        `✅ *Полный возврат 100%:*\n` +
        `• Если я не приступил к работе\n` +
        `• По обоюдному согласию сторон\n` +
        `• При форс-мажорных обстоятельствах\n\n` +
        `✅ *Частичный возврат:*\n` +
        `• Пропорционально выполненной работе\n` +
        `• При досрочном прекращении проекта\n` +
        `• По техническим причинам с моей стороны\n\n` +
        `❌ *Без возврата:*\n` +
        `• После начала активной разработки\n` +
        `• При предоставлении готовых результатов\n` +
        `• В случае нарушения условий с вашей стороны\n\n` +
        `⏰ *Процесс возврата:*\n` +
        `1. Подача заявления на возврат\n` +
        `2. Рассмотрение в течение *3 рабочих дней*\n` +
        `3. Возврат средств на исходный платежный метод\n` +
        `4. Срок зачисления: *5-10 рабочих дней*`

    sendEditMessage(ctx, messageText, keyboard)
}

export function termsFAQ(ctx: AnyContext) {
    const keyboard = new InlineKeyboard()
        .text("💳 Способы оплаты", "terms_methods")
        .text("📝 Условия", "terms_conditions")
        .row()
        .text("💼 Связаться", "contacts")
        .text("⬅️ Назад", "terms")

    const messageText =
        `❓ *Частые вопросы об оплате*\n\n` +
        `💬 *Можно ли оплатить частями?*\n` +
        `Да, крупные проекты можно разбить на этапы с поэтапной оплатой. Каждый этап оплачивается отдельно.\n\n` +
        `💬 *Есть ли скидки?*\n` +
        `Да, предусмотрены скидки для:\n` +
        `• Долгосрочного сотрудничества\n` +
        `• Комплексных заказов\n` +
        `• Социальных и образовательных проектов\n\n` +
        `💬 *Сколько времени ждать ответа?*\n` +
        `• По оплате: *1-2 часа* в рабочее время\n` +
        `• По проекту: *до 24 часов*\n` +
        `• Срочные вопросы: *немедленно*\n\n` +
        `💬 *Можно ли изменить способ оплаты?*\n` +
        `Да, способ оплаты можно изменить до момента совершения платежа.`

    sendEditMessage(ctx, messageText, keyboard)
}