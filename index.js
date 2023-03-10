const { Client, Intents } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS],
});
const config = require("./utils/config.json");

const token = config.TOKEN;

const fs = require("fs");

const eventFiles = fs.readdirSync("./events/").filter((file) => file.endsWith(".js"));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (args) => event.execute(args, client));
	} else {
		client.on(event.name, (args) => event.execute(args, client));
	}
}

client.login(token);
