const commands = require("../config/commandHandler.js");
const config = require("../utils/config.json");

module.exports = {
	name: "messageCreate",
	once: false,
	execute(msg, client) {
		if (msg.author.bot) return;

		let args = "";
		if (msg.content.startsWith(config.PREFIX)) {
			args = msg.content.substring(config.PREFIX.length).split(" ");
		}
		if (!args) return;

		if (!commands.has(args[0])) return;

		commands.get(args[0]).execute(msg, args);
	},
};
