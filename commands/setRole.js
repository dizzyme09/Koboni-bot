const authority = require("../utils/authority.json");
const { handlingPermissions } = require("../config/permissionHandler.js");

module.exports = {
	name: "set-role",
	description: "Set a role Member to a user",
	execute(msg, args, client) {
		handlingPermissions("adminOnly", msg, client, { roles: true }, (status) => {
			if (status) {
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
			}
		});
	},
};
