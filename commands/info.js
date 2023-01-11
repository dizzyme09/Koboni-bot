const { MessageEmbed } = require("discord.js");
const botInfo = require("../botInfo.json");

module.exports = {
	name: "info",
	description: "Bot Information",
	execute(msg, args) {
		if (!args[1]) {
			const infoEmbed = new MessageEmbed()
				.setTitle("Bot Information Commands")
				.setColor(0x00ff00)
				.setDescription("Choose the following options: ")
				.addField("Author", "Bot Author")
				.addField("Version", "Bot Version")
				.addField("Bot", "All Information About Bot")
				.setFooter("Version: " + botInfo.VERSION);
			msg.channel.send(infoEmbed);
		} else {
			if (args[1] === "Author") {
				msg.channel.send(botInfo.author);
			} else if (args[1] === "Version") {
				msg.channel.send("Version " + botInfo.VERSION);
			} else if (args[1] === "Bot") {
				const botInfoEmbed = new MessageEmbed()
					.setTitle("Bot Information")
					.setColor(0x00ff00)
					.setDescription(botInfo.bot_desc)
					.addField("Author", botInfo.author, true)
					.addField("Version", botInfo.VERSION, true);
				msg.channel.send(botInfoEmbed);
			} else {
				msg.channel.send("Invalid Argument");
			}
		}
	},
};
