const {Client, MessageEmbed} = require("discord.js");
const bot = new Client();
const dotenv = require('dotenv');

dotenv.config({ path: "./config.env"});

// get token from config.env
const token = process.env.TOKEN;
var PREFIX = "!";
var VERSION = "1.0";

bot.on("ready", () => {
	console.log("Bot is online!");
});

bot.on("message", (msg) => {
	let args = msg.content.substring(PREFIX.length).split(" ");

	switch (args[0]) {
		case "ping":
			msg.reply("pong");
			break;
		case "info":
			if (!args[1]) {
				msg.channel.send("Commands : \n-Author\n-Version");
				break;
			} else {
				if (args[1] === "Author") {
					msg.channel.send("Dizzyme09");
					break;
				} else if (args[1] === "Version") {
					msg.channel.send("Version " + VERSION);
					break;
				} else {
					msg.channel.send("Invalid Argument");
					break;
				}
			}
			case "embed":
				const embed = new MessageEmbed()
				.setTitle("Bot Info")
				.setColor(0x00ff00)
				.addField("Name: ", "Koboni")
				.addField("Author: ", "Dizzyme09")
				.addField("Version: ", VERSION);
				msg.channel.send(embed);
				break;
	}
});

bot.login(token);
