const permissions = require("../utils/permissions.json");

module.exports = {
	name: "ban",
	description: "Ban a user",
	execute(msg, args, client) {
		const roles = msg.guild.members.cache.get(msg.author.id)._roles;

		if (roles.some((role) => permissions.adminOnly.roles.includes(role))) {
			const userBan = msg.mentions.users.first();

			if (userBan) {
				const memberBan = msg.guild.members.cache.get(userBan.id);

				if (memberBan) {
					memberBan
						.ban({
							reason: "You have been banned!",
						})
						.then(() => {
							msg.reply(`Successfully banned ${userBan.tag}`);
						})
						.catch((err) => {
							msg.reply("I was unable to ban the member");
							console.log(err);
						});
				} else {
					msg.reply("That user isn't in this guild!");
				}
			} else {
				msg.reply("You didn't mention the user to ban!");
			}
		} else {
			msg.reply("You do not have the role!");
		}
	},
};
