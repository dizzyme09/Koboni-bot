module.exports = {
	name: "guildMemberAdd",
	once: false,
	execute(member, client) {
		const channel = member.guild.channels.cache.find((ch) => ch.name === "member-log");
		const rules = member.guild.channels.cache.find((ch) => ch.name === "rules");

		if (!channel) {
			return;
		}
		if (member.guild.name === "redeem spawn only") {
			channel.send(`Welcome to the server, ${member}, please read ${rules} and enjoy your stay!`);
		}
	},
};
