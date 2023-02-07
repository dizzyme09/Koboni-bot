var broadcast;
const { handlingPermissions } = require("../config/permissionHandler.js");

module.exports = {
	name: "broadcast",
	description: "Broadcasts a message every 15 seconds",
	execute(msg, args, client) {
		handlingPermissions("adminOnly", msg, client, { roles: true }, (status) => {
			if (status) {
				if (args[1] == "start") {
					msg.reply("Broadcast started! (15 seconds)");
					broadcast = setInterval(() => {
						msg.channel.send("This is a broadcast message!");
					}, 1000 * 15);
				} else if (args[1] == "stop") {
					msg.reply("Broadcast stopped!");
					clearInterval(broadcast);
				} else {
					msg.reply("Please use the correct syntax: !broadcast [start/stop]");
				}
			}
		});
	},
};
