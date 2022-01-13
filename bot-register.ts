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

const commands = await deploy.commands.all()
console.log('commands.size', JSON.stringify(commands.size,null,2))
for (const cmd of commands) {
  let [commandId, command]: [string, ApplicationCommand] = cmd
  console.log('command', JSON.stringify(command,null,2))
}

if (commands.size !== 1) {
  console.log('deploying commands...')
  deploy.commands.bulkEdit([
    {
      name: 'dping',
      description: "A simple ping command. What did you expect?",
      options: [
        {
          name: 'pingarg',
          description: 'Again literally pingArg',
          required: false,
          type: deploy.ApplicationCommandOptionType.STRING
        }
      ]
    }
  ])
}
