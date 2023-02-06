const permissions = require("../utils/permissions.json");

module.exports = {
	name: "set-role",
	description: "Set a role Member to a user",
	execute(msg, args, client) {
		const roles = msg.guild.members.cache.get(msg.author.id)._roles;

		if (roles.some((role) => permissions.roles.admin.includes(role))) {
			const user = msg.mentions.users.first();

			if (user) {
				const userSet = msg.guild.members.cache.find((member) => member.id === user.id);
				if (userSet) {
					var role = msg.guild.roles.cache.find((role) => role.name === "Member");
					var member = msg.guild.members.cache.find((member) => member.id === user.id);

					member.roles.add(role.id);
					msg.reply(`Successfully set the role ${role} to ${userSet}`);
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
