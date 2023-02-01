const { MessageEmbed } = require("discord.js");
const config = require("../utils/config.json");

module.exports = {
	name: "info",
	description: "Bot Information",
	execute(msg, args, client) {
		if (!args[1]) {
			const infoEmbed = new MessageEmbed()
				.setTitle("Bot Information Commands")
				.setColor(0x00ff00)
				.setDescription("Choose the following options: ")
				.addField("Author", "Bot Author")
				.addField("Version", "Bot Version")
				.addField("Bot", "All Information About Bot")
				.setFooter(`Requested by ${msg.author.username}`, msg.author.displayAvatarURL());
			msg.channel.send({ embeds: [infoEmbed] });
		} else {
			if (args[1] === "Author") {
				msg.channel.send(config.author);
			} else if (args[1] === "Version") {
				msg.channel.send("Version " + config.VERSION);
			} else if (args[1] === "Bot") {
				const configEmbed = new MessageEmbed()
					.setTitle("Bot Information")
					.setColor(0x00ff00)
					.setDescription(config.bot_desc)
					.addField("Author", config.author, true)
					.addField("Version", config.VERSION, true)
					.setThumbnail(client.user.displayAvatarURL())
					.setFooter(`Requested by ${msg.author.username}`, msg.author.displayAvatarURL());
				msg.channel.send({ embeds: [configEmbed] });
			} else {
				msg.channel.send("Invalid Argument");
			}
		}
	},
};
