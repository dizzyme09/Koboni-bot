module.exports = {
	name: "get-role",
	description: "Get a role Member to a user",
	execute(msg, args) {
		const user = msg.author.id;
		var member = msg.guild.members.cache.find((member) => member.id === user);
		var role = msg.guild.roles.cache.find((role) => role.name === "Member");

		member.roles.add(role.id);
		msg.reply("You have been given the role " + role.name);
	},
};
