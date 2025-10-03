import { webhookCallback } from "grammy";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { bot } from "./bot.js";

const app = new Hono();

import "./handlers/commandHandler.ts";

if (process.env.BOT_MODE === 'polling') {
    console.log('🚀 Запуск в режиме Long Polling (отладка)');
    bot.start();
} else {
    console.log('🌐 Запуск в режиме Webhook');
    app.post("/telegram-webhook", webhookCallback(bot, "hono"));

    const port = Number(process.env.PORT) || 3000;
    serve({
        fetch: app.fetch,
        port
    }, () => {
        console.log(`Сервер запущен на порту ${port}`);
    });
}