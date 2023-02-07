const { handlingPermissions } = require("../config/permissionHandler.js");

module.exports = {
	name: "reminder",
	description: "Set a reminder",
	execute(msg, args, client) {
		handlingPermissions("reminder", msg, client, { channels: true }, (status) => {
			if (status) {
				let set = msg.content.split(" | ");
				let time = 0;
				// example: !reminder | 1h | message
				if (set[1]) {
					if (set[1].endsWith("s")) {
						time = set[1].replace("s", "");
						time = time * 1000;
					} else if (set[1].endsWith("m")) {
						time = set[1].replace("m", "");
						time = time * 1000 * 60;
					} else if (set[1].endsWith("h")) {
						time = set[1].replace("h", "");
						time = time * 1000 * 60 * 60;
					} else if (set[1].endsWith("d")) {
						time = set[1].replace("d", "");
						time = time * 1000 * 60 * 60 * 24;
					} else if (set[1].endsWith("w")) {
						time = set[1].replace("w", "");
						time = time * 1000 * 60 * 60 * 24 * 7;
					} else if (set[1].endsWith("mo")) {
						time = set[1].replace("mo", "");
						time = time * 1000 * 60 * 60 * 24 * 30;
					} else if (set[1].endsWith("y")) {
						time = set[1].replace("y", "");
						time = time * 1000 * 60 * 60 * 24 * 365;
					} else {
						msg.channel.send("Please provide a valid time");
						return;
					}
				} else {
					msg.channel.send("Please provide a time");
					return;
				}

				if (set[2]) {
					msg.reply(`I will remind you in ${set[1]}`);
					setTimeout(() => {
						msg.channel.send(`Reminder for ${msg.author}: ${set[2]}`);
					}, time);
				} else {
					msg.channel.send("Please provide a message to remind you of");
					return;
				}
			}
		});
	},
};
