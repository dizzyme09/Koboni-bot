const { Client, MessageEmbed } = require("discord.js");
const bot = new Client();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

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
				const infoEmbed = new MessageEmbed()
					.setTitle("Bot Info")
					.setColor(0x00ff00)
					.setDescription("Choose the following options: ")
					.addField("Author", "Bot Author")
					.addField("Version", "Bot Version")
					.addField("Bot", "All Information About Bot")
					.setFooter("Version: " + VERSION);
				msg.channel.send(infoEmbed);
				break;
			} else {
				if (args[1] === "Author") {
					msg.channel.send("Dizzyme09");
					break;
				} else if (args[1] === "Version") {
					msg.channel.send("Version " + VERSION);
					break;
				} else if (args[1] === "Bot") {
					const botInfo = new MessageEmbed()
						.setTitle("Bot Info")
						.setColor(0x00ff00)
						.setDescription("a bot named koboni that will help your server with her sloopy commands!")
						.addField("Author", "Dizzyme09", true)
						.addField("Version", VERSION, true);
					msg.channel.send(botInfo);
					break;
				} else {
					msg.channel.send("Invalid Argument");
					break;
				}
			}
		case "help":
			const helpEmbed = new MessageEmbed()
				.setTitle("Bot Commands")
				.setColor(0x00ff00)
				.addField("PREFIX", PREFIX)
				.addField("help", "Bot Commands")
				.addField("ping", "Ping bot")
				.addField("info", "Info About Bot")
				.setFooter("Version: " + VERSION);
			msg.channel.send(helpEmbed);
			break;
	}
});

bot.login(token);
