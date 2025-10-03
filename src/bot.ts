
import { Bot } from "grammy";
import 'dotenv/config';

export const bot = new Bot(process.env.BOT_TOKEN!);

export function initializeBot() {
    return bot;
}