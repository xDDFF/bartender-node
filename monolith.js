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

//const args = message.content.slice().trim().split(/ +/g);
//let taggedUser = args[0];


/// !<command>
// command template
//	if (message.content === '!<command?') {
//		message.channel.send('');
//	}

// !ping
  if (message.content === '!ping') {
    message.channel.send('Pong!');
		}

// !pack
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

// !rounds
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

// !beer
  if (message.content === '!beer') {
    message.channel.send('Here! take this! an ice cold beer! is a Warsteiner! Prost!');
		}

// !dff
	if (message.content === '!dff') {
		message.channel.send('DFF: Dobby the Faggot Ferret!!!1 <3 https://i.imgur.com/7nac3rM.jpg');
	}
// !taxes
	if (message.content === '!taxes') {
		message.channel.send('TAXES?! I think you better look at this!! http://i.imgur.com/mxrbcBX.jpg');
	}

// !interdome
	if (message.content === '!interdome') {
		message.channel.send('interdome? that nigga in #201337, he is so fucking 80s, he is listening to gg allin!!');
	}

// !applegroo
	if (message.content == '!applegroo') {
		message.channel.send('He is the best builder there is, his knowledge of physics empowers his building skills.');
	}

// !wrists
	if (message.content == '!wrists') {
		message.channel.send(`WATCHES AS ${message.author} SLAHES IT'S OWN WRISTS!!1`);
		message.channel.send('i guess being a faggot and picking extra shifts at th ick factory was to much!1!');
	}
});

// Log in to Discord with your bot token
client.login(token);

