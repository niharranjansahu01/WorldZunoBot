# World Zuno (@WorldZunoBot)

A multiplayer geography guessing game for Telegram.

## Features

* Identify countries from their silhouette maps (Map mode) or flags (Flag mode).
* Distance hints after each guess to help locate the correct country.
* Multiplayer gameplay in group chats.
* Group and global leaderboards with score tracking.
* Admin tools for managing games in groups and forum topics.

## How to Play

1. Start a game using `/newworld` (map) or `/newflag` (flag).
2. The bot sends a random country's silhouette or flag.
3. Guess the country by sending its name in chat.
4. After each guess, the bot shows the distance to the correct country.
5. The first person to guess correctly wins 10 points.

## Commands

* `/newworld` - Start a map game
* `/newflag` - Start a flag game
* `/endworld` - End the current game (admins only in groups)
* `/help` - Help and command list
* `/leaderboard` - Leaderboard rankings
* `/score` - Your score or another player's score
* `/setgametopic` / `/unsetgametopic` - Restrict games to a forum topic (admins)
* `/worldauth` - Manage users authorized to end games
* `/stats` - Bot usage stats (bot owner only)

## Setup

Requirements: Bun (or Node.js), a Telegram bot token from @BotFather, PostgreSQL, Redis.

```bash
bun install
cp .env.example .env     # then fill in your values
bun run db:migrate latest
bun run dev              # development
bun run start            # production
```

### Environment Variables

| Variable     | Description                                  |
| ------------ | -------------------------------------------- |
| BOT_TOKEN    | Telegram bot token from BotFather            |
| DATABASE_URL | PostgreSQL connection string                 |
| REDIS_URI    | Redis connection string                      |
| NODE_ENV     | `development` or `production`                |
| ADMIN_USERS  | Comma-separated Telegram user IDs of owners  |

### Your links

Edit `src/config/constants.ts` to set your Updates channel, Discussion group, Donate link, GitHub repo and Ban-appeal link. Any link left empty is hidden from the bot's buttons.

## Tech

grammY, Kysely, PostgreSQL, Redis, Bun, Sharp, Satori, Zod
