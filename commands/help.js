const { MessageEmbed } = require("discord.js");
const config = require("../utils/config.json");

module.exports = {
	name: "help",
	description: "Bot Commands",
	execute(msg, args, client) {
		const helpEmbed = new MessageEmbed()
			.setTitle("Bot Commands")
			.setColor(0x00ff00)
			.addField("PREFIX", config.PREFIX)
			.addField("help", "Bot commands")
			.addField("ping", "Ping bot")
			.addField("info", "Bot information")
			.addField("info-user <user>", "User information")
			.addField("get-role", "Get a role Member to a user")
			.addField("reminder | <time> | <message>", "Set a reminder")
			.addField("check-admin", "Check if user has Admin role")
			.addField("set-role <user>", "Set a role Member to a user (Admin only)")
			.addField("remove-role <user>", "Remove a role Member to a user (Admin only)")
			.addField("kick <user>", "Kick a user (Admin only)")
			.addField("ban <user>", "Ban a user (Admin only)")
			.addField("clear <count>", "Clear messages (Admin only)")
			.addField("broadcast <start/stop>", "Broadcast a message (Admin only)")
			.addField("delay", "Delay messages")
			.addField("cooldown", "Cooldown messages")
			.setFooter(`Requested by ${msg.author.username}`, msg.author.displayAvatarURL());
		msg.channel.send({ embeds: [helpEmbed] });
	},
};
