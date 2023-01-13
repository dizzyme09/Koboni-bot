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
			.addField("help", "Bot Commands")
			.addField("ping", "Ping bot")
			.addField("info", "Bot Information")
			.addField("clear ```<count>```", "Clear messages")
			.setFooter("Version: " + botInfo.VERSION);
		msg.channel.send(helpEmbed);
	},
};
