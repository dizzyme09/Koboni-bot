const permissions = require("../utils/permissions.json");

module.exports = {
	name: "check-admin",
	description: "Checks if the user has the Admin role",
	execute(msg, args, client) {
		const roles = msg.guild.members.cache.get(msg.author.id)._roles;

		if (roles.some((role) => permissions.roles.admin.includes(role))) {
			msg.channel.send("You have the role!");
		} else {
			msg.channel.send("You do not have the role!");
		}
	},
};
