const permissions = require("../utils/permissions.json");
const authority = require("../utils/authority.json");

module.exports = {
	name: "set-role",
	description: "Set a role Member to a user",
	execute(msg, args, client) {
		const roles = msg.guild.members.cache.get(msg.author.id)._roles;

		if (roles.some((role) => permissions.adminOnly.roles.includes(role))) {
			const user = msg.mentions.users.first();

			if (user) {
				const userSet = msg.guild.members.cache.find((member) => member.id === user.id);
				if (userSet) {
					const roleToAdd = authority.roles.member;
					const userRoles = userSet._roles;

					if (userRoles.some((role) => roleToAdd.includes(role))) {
						msg.reply("That user already has the role!");
					} else {
						userSet.roles.add(roleToAdd);
						msg.reply(`Successfully set the role <@&${roleToAdd}> to ${userSet}`);
					}
				} else {
					msg.reply("That user isn't in this guild!");
				}
			} else {
				msg.reply("You didn't mention the user to set the role!");
			}
		} else {
			msg.reply("You do not have the role!");
		}
	},
};
