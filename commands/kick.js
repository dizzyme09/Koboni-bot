const permissions = require("../utils/permissions.json");

module.exports = {
	name: "kick",
	description: "Kick a user",
	execute(msg, args, client) {
		const roles = msg.guild.members.cache.get(msg.author.id)._roles;

		if (roles.some((role) => permissions.roles.admin.includes(role))) {
			const userKick = msg.mentions.users.first();

			if (userKick) {
				const memberKick = msg.guild.members.cache.find((member) => member.id === userKick.id);

				if (memberKick) {
					memberKick
						.kick("You have been kicked!")
						.then(() => {
							msg.reply(`Successfully kicked ${userKick.tag}`);
						})
						.catch((err) => {
							msg.reply("I was unable to kick the member");
							console.log(err);
						});
				} else {
					msg.reply("That user isn't in this guild!");
				}
			} else {
				msg.reply("You didn't mention the user to kick!");
			}
		} else {
			msg.reply("You do not have the role!");
		}
	},
};
