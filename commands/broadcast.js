var broadcast;
module.exports = {
	name: "broadcast",
	description: "Broadcasts a message every 15 seconds",
	execute(msg, args) {
		var roles = msg.member.roles.cache.find((role) => role.name === "Admincoy");

		if (!roles) {
			return msg.reply("You do not have the role!");
		} else {
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
	},
};
