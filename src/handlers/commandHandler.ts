import { bot } from "../bot.ts";

import { about, aboutStack } from "../menu/about.ts";
import { start } from "../menu/start.ts";
import { contacts } from "../menu/contacts.ts";

import {
    terms,
    termsMethods,
    termsConditions,
    termsRefunds,
    termsFAQ
} from "../menu/terms.ts"

import {
    services,
    servicesWeb,
    servicesBots,
    servicesApps,
    servicesScripts,
    servicesHelp
} from "../menu/services.ts"

import {
    portfolio,
    portfolioWebsites,
    portfolioBots,
    portfolioApps,
    portfolioOther,
    portfolioQuick
} from "../menu/portfolio.ts"

bot.command("start", start);
bot.command("about", about);
bot.command("services", services)

bot.callbackQuery("start", start);

bot.callbackQuery("about", about);
bot.callbackQuery("about_stack", aboutStack);

bot.callbackQuery("terms", terms)
bot.callbackQuery("terms_methods", termsMethods)
bot.callbackQuery("terms_conditions", termsConditions)
bot.callbackQuery("terms_refunds", termsRefunds)
bot.callbackQuery("terms_faq", termsFAQ)

bot.callbackQuery("contacts", contacts)

bot.callbackQuery("services", services)
bot.callbackQuery("services_web", servicesWeb)
bot.callbackQuery("services_bots", servicesBots)
bot.callbackQuery("services_apps", servicesApps)
bot.callbackQuery("services_scripts", servicesScripts)
bot.callbackQuery("services_help", servicesHelp)

bot.callbackQuery("portfolio", portfolio)
bot.callbackQuery("portfolio_websites", portfolioWebsites)
bot.callbackQuery("portfolio_bots", portfolioBots)
bot.callbackQuery("portfolio_apps", portfolioApps)
bot.callbackQuery("portfolio_other", portfolioOther)

bot.callbackQuery("portfolio_quick", portfolioQuick)