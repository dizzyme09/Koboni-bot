const { Client, Collection } = require("discord.js");
const bot = new Client();
const dotenv = require("dotenv");
const botInfo = require("./botInfo.json");

dotenv.config({ path: "./config.env" });

const token = process.env.TOKEN;

const fs = require("fs");
const commands = new Collection();
const files = fs.readdirSync("./commands/").filter((file) => file.endsWith(".js"));
for (const file of files) {
	const command = require(`./commands/${file}`);
	commands.set(command.name, command);
}

bot.on("ready", () => {
	console.log("Bot is online!");
});

bot.on("message", (msg) => {
	let args = msg.content.substring(botInfo.PREFIX.length).split(" ");

	switch (args[0]) {
		case "ping":
			commands.get("ping").execute(msg);
			break;
		case "info":
			commands.get("info").execute(msg, args);
			break;
		case "help":
			commands.get("help").execute(msg);
			break;
	}
});

bot.login(token);
