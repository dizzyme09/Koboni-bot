const { MessageEmbed } = require("discord.js");
const config = require("../utils/config.json");

module.exports = {
	name: "info-user",
	description: "User Information",
	execute(msg, args, client) {
		let mention = msg.mentions.users.first() || msg.author;
		let member = msg.guild.members.cache.get(mention.id);
		let serverJoin = member.joinedAt.toDateString();
		let discordJoin = member.user.createdAt.toDateString();
		member._roles = member._roles.filter((role) => role !== config.roleID);

		const userEmbed = new MessageEmbed()
			.setTitle(`${member.user.username} Information`)
			.setColor(0x00ff00)
			.setDescription("User Information")
			.addField("User ID", member.user.id, true)
			.addField("Nickname", member.nickname ? member.nickname : member.user.username, true)
			.addField("Joined Server", serverJoin, true)
			.addField("Joined Discord", discordJoin, true)
			.addField("Roles", member._roles.length ? member._roles.map((role) => `<@&${role}>`).join(", ") : "None", true)
			.setThumbnail(member.user.displayAvatarURL())
			.setFooter(`Requested by ${msg.author.username}`, msg.author.displayAvatarURL());

		msg.channel.send({ embeds: [userEmbed] });
	},
};
