const permissions = require("../utils/permissions.json");

module.exports = {
	name: "remove-role",
	description: "Remove a role Member to a user",
	execute(msg, args, client) {
		const roles = msg.guild.members.cache.get(msg.author.id)._roles;

		if (roles.some((role) => permissions.roles.admin.includes(role))) {
			const user = msg.mentions.users.first();

			if (user) {
				const userSet = msg.guild.members.cache.find((member) => member.id === user.id);
				if (userSet) {
					const roleToRemove = permissions.roles.member;
					const userRoles = userSet._roles;

					if (userRoles.some((role) => roleToRemove.includes(role))) {
						userSet.roles.remove(roleToRemove);
						msg.reply(`Successfully removed the role from ${userSet}`);
					} else {
						msg.reply("That user doesn't have the role!");
					}
				} else {
					msg.reply("That user isn't in this guild!");
				}
			} else {
				msg.reply("You didn't mention the user to remove the role!");
			}
		} else {
			msg.reply("You do not have the role!");
		}
	},
};
