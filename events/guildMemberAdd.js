const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "guildMemberAdd",
	once: false,
	execute(member, client) {
		const channel = member.guild.channels.cache.find((ch) => ch.name === "member-log");
		const rules = member.guild.channels.cache.find((ch) => ch.name === "rules");

		if (!channel) {
			return;
		}
		const newMemberEmbed = new MessageEmbed()
			.setColor("#0099ff")
			.setTitle("New Member")
			.setAuthor(member.user.tag, member.user.displayAvatarURL())
			.setDescription(`Welcome to the server, ${member}!`)
			.addFields({ name: "Rules", value: `Please read the ${rules} channel!` }, { name: "Roles", value: "Please get your roles by using commands `!get-roles`" })
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp();

		channel.send({ embeds: [newMemberEmbed] });
	},
};
