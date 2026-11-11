import { Composer, InlineKeyboard } from "grammy";

import { APPEAL_LINK } from "../config/constants";
import { db } from "../config/db";

const composer = new Composer();

composer.on("message", async (ctx, next) => {
  const isUserBanned = await db
    .selectFrom("bannedUsers")
    .selectAll()
    .where("userId", "=", ctx.from.id.toString())
    .executeTakeFirst();

  if (!isUserBanned) return await next();

  const keyboard = new InlineKeyboard();
  if (APPEAL_LINK) keyboard.url("Appeal", APPEAL_LINK).primary();
  const banMessage =
    "⚠️ You have been banned from bot for cheating using automated scripts or using image search!";

  if (ctx.chat.type === "private") {
    return ctx.reply(banMessage, {
      reply_markup: APPEAL_LINK ? keyboard : undefined,
    });
  } else {
    const me = ctx.me.id.toString();

    const botMentioned =
      ctx.message.reply_to_message?.from?.id.toString() === me;

    if (botMentioned) {
      return ctx.reply(banMessage, {
        reply_markup: APPEAL_LINK ? keyboard : undefined,
      });
    }
  }
});

export const handleBannedUsers = composer;
