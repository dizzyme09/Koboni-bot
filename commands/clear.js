const { handlingPermissions } = require("../config/permissionHandler.js");

module.exports = {
	name: "clear",
	description: "Clear messages!",
	execute(msg, args, client) {
		handlingPermissions("adminOnly", msg, client, { roles: true }, (status) => {
			if (status) {
				if (!args[1]) {
					return msg.reply("Please enter the amount of messages that you want to clear!");
				} else if (args[1] < 1 || args[1] > 100) {
					return msg.reply("Please enter a number between 1 and 100!");
				} else {
					msg.channel.bulkDelete(args[1]);
				}
			}
		});
	},
};
