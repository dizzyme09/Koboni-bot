const { MessageEmbed } = require("discord.js");
const botInfo = require("../botInfo.json");

module.exports = {
	name: "help",
	description: "Bot Commands",
	execute(msg) {
		const helpEmbed = new MessageEmbed()
			.setTitle("Bot Commands")
			.setColor(0x00ff00)
			.addField("PREFIX", botInfo.PREFIX)
			.addField("help", "Bot commands")
			.addField("ping", "Ping bot")
			.addField("info", "Bot information")
			.addField("check-admin", "Check if user has Admin role")
			.addField("clear <count>", "Clear messages (Admin only)")
			.addField("delay", "Delay messages")
			.addField("cooldown", "Cooldown messages")
			.setFooter("Version: " + botInfo.VERSION);
		msg.channel.send(helpEmbed);
	},
};
