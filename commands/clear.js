const permissions = require("../utils/permissions.json");

module.exports = {
	name: "clear",
	description: "Clear messages!",
	execute(msg, args, client) {
		const roles = msg.guild.members.cache.get(msg.author.id)._roles;

		if (roles.some((role) => permissions.roles.admin.includes(role))) {
			if (!args[1]) {
				return msg.reply("Please enter the amount of messages that you want to clear!");
			} else if (args[1] < 1 || args[1] > 100) {
				return msg.reply("Please enter a number between 1 and 100!");
			} else {
				msg.channel.bulkDelete(args[1]);
			}
		} else {
			msg.reply("You do not have the role!");
		}
	},
};
