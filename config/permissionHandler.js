const permissions = require("../utils/permissions.json");

const handlingPermissions = (command, msg, client, option, callback) => {
	let status = false;

	if (option.roles) {
		const roles = msg.guild.members.cache.get(msg.author.id)._roles;
		if (permissions[command].roles) {
			status = roles.some((role) => permissions[command].roles.includes(role));

			if (!status) {
				msg.reply("You do not have the role!");
				return callback(status);
			}
		}
	}
	if (option.channels) {
		const channel = msg.channel.id;
		if (permissions[command].channels) {
			status = permissions[command].channels.includes(channel);

			if (!status) {
				let channelReady = "";
				permissions[command].channels.forEach((id) => {
					const ch = client.channels.cache.find((ch) => ch.id === id);
					if (ch !== undefined) {
						channelReady += `${ch}`;
					}
				});
				msg.reply(`Please use the reminder command in ${channelReady}!`);
				return callback(status);
			}
		}
	}
	return callback(status);
};

module.exports = { handlingPermissions };
