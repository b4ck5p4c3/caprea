# Caprea
Lambda removing everything but replies from a Telegram chat. 
Useful for "commenting channels" created solely for this purpose.

**Caution:** WIP, not ready to use.

## Pre-requirements
1. Adjust `wrangler.toml` to your environment.
2. Set Telegram Bot token via `wrangler secret put BOT_TOKEN`.

## Installation & deployment
1. Install [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler)
2. Install dependencies with `npm ci`
3. Debug and develop locally with `wrangler dev`
4. Deploy with `wrangler deploy`
