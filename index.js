const { Client, Collection, Intents } = require("discord.js");
const bot = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const config = require("./utils/config.json");

const token = config.TOKEN;

const fs = require("fs");

bot.commands = new Collection();
const files = fs.readdirSync("./commands/").filter((file) => file.endsWith(".js"));
for (const file of files) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
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

	bot.user.setPresence({
		activities: [{ name: "!help" }],
		status: "idle",
	});
});

bot.on("messageCreate", (msg) => {
	if (msg.author.bot) return;

	let args = "";
	if (msg.content.startsWith(config.PREFIX)) {
		args = msg.content.substring(config.PREFIX.length).split(" ");
	}
	if (!args) return;

	if (!bot.commands.has(args[0])) return;

	bot.commands.get(args[0]).execute(msg, args);
});

bot.login(token);
