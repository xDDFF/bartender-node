// Import the necessary classes from discord.js
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance with intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // Required to access guild info
    GatewayIntentBits.GuildMessages, // Required to read/send messages
    GatewayIntentBits.MessageContent // Required to access message content
  ]
});

// Event: When the bot is ready
client.once('ready', () => {
  console.log(`${client.user.tag}!is online MOTHERUCKET!!`);
});

// Event: When a message is sent in a server
client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
		}
	if (message.content === '!pack') {;
		message.channel.send("`\\|/\\|/ ` **listen up... public announcement**: Pick it, Pack it, just be ready for a chan wide toke-out in 30 seconds. `\\|/\\|/`");
    setTimeout(() => {
      message.channel.send("`\\|/\\|/` Ladies & Gents, get your __BØTTE, BOWLS, BONGS, DAB RIGS__ **READY**! `\\|/\\|/`")
      setTimeout(() => {message.channel.send("`\\|/\\|/\\|//\\|/\\|/\\|/` 5 `\\|/\\|/\\|//\\|/\\|/\\|/`")}, 1500);
      setTimeout(() => {message.channel.send("`\\|/\\|/\\|/\\|/`4 `\\|/\\|/\\|/\\|/`")}, 2500);
      setTimeout(() => {message.channel.send("`\\|/\\|/\\|/`3 `\\|/\\|/\\|/`")}, 3500);
      setTimeout(() => {message.channel.send("`\\|/\\|/`2 `\\|/\\|/`")}, 4500);
      setTimeout(() => {message.channel.send("`\\|/`1 `\\|/`")}, 5500);
      setTimeout(() => {message.channel.send("SYNCHRONIZED! `\\|/\\|/` FIRE UP YOUR DANK SHIT!! `\\|/\\|/`")}, 6500);
    }, 30000);
	}
	if(message.content === '!rounds') {
		message.channel.send("`Everyone get your drinks ready! We are doing shots in 30 secs!!`");
 	setTimeout(() => {
   	message.channel.send("`00000100|0x04| .....`")
   	setTimeout(() => {message.channel.send("`00000011|0x03| ....`")}, 1500);
   	setTimeout(() => {message.channel.send("`00000010|0x02| ...`")}, 2500);
   	setTimeout(() => {message.channel.send("`00000001|0x01| ..`")}, 3500);
   	setTimeout(() => {message.channel.send("`00000000|0x00| .`")}, 4500);
   	setTimeout(() => {message.channel.send("`BOTTOMS UP!!`")}, 5500);
 	}, 30000);
	}

  if (message.content === '!beer') {
    message.channel.send('Here! take this! an ice cold beer! is a Warsteiner! Prost!');
		}
});
// Log in to Discord with your bot token
client.login(token);

