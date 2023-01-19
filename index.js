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

bot.on("guildMemberAdd", (member) => {
	const channel = member.guild.channels.cache.find((ch) => ch.name === "member-log");
	const rules = member.guild.channels.cache.find((ch) => ch.name === "rules");

	if (!channel) {
		return;
	}
	if (member.guild.name === "redeem spawn only") {
		channel.send(`Welcome to the server, ${member}, please read ${rules} and enjoy your stay!`);
	}
});

bot.on("ready", () => {
	console.log("Bot is online!");

	bot.user.setActivity("!help", { type: "PLAYING" }).catch(console.error);
});

bot.on("message", (msg) => {
	let args = msg.content.substring(botInfo.PREFIX.length).split(" ");

	if (!msg.content.startsWith(botInfo.PREFIX)) {
		return;
	}
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
		case "clear":
			commands.get("clear").execute(msg, args);
			break;
		case "delay":
			commands.get("delay").execute(msg);
			break;
		case "cooldown":
			commands.get("cooldown").execute(msg);
			break;
		case "check-admin":
			commands.get("check-admin").execute(msg);
			break;
		case "kick":
			commands.get("kick").execute(msg);
			break;
		case "ban":
			commands.get("ban").execute(msg);
			break;
		case "broadcast":
			commands.get("broadcast").execute(msg, args);
			break;
		case "set-role":
			commands.get("set-role").execute(msg);
			break;
		case "remove-role":
			commands.get("remove-role").execute(msg);
			break;
		case "get-role":
			commands.get("get-role").execute(msg);
			break;
	}
});

bot.login(token);
