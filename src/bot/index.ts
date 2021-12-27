import type { Router } from 'worktop'
import { Bot, webhookCallback } from 'grammy'

/**
 * Grammy instance
 */
const bot = new Bot(BOT_TOKEN)

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

/**
 * Connects Grammy with Worktop
 * @param api Worktop instance
 */
export function setWorktopHandler(api: Router) {
  api.add('POST', '*', webhookCallback(bot, 'worktop'))
}
