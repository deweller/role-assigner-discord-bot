import {
  Client,
  GatewayIntents,
  ApplicationCommand,
} from 'https://code.harmony.rocks/ccd7affa2ac16b27b8554a0944cd1ad5cafc7918/mod.ts'

import * as deploy from 'https://code.harmony.rocks/ccd7affa2ac16b27b8554a0944cd1ad5cafc7918/deploy.ts'

console.log('Harmony - Deploy Example')

// Set TOKEN env as your token, PUBLIC_KEY env as your public key.
const env = Deno.env.toObject();
deploy.init({
  token: env.BOT_TOKEN,
  publicKey: env.CLIENT_ID,
})

deploy.handle('dping', (d) => {
  const arg = d.option<string | undefined>('pingarg')
  d.reply(`Pong! You typed: ${arg !== undefined ? arg : 'nothing'}`)
})
