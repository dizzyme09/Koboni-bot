const config = require("../../utils/config.json");

module.exports = {
	name: "prefix",
	description: "Get the prefix",
	execute(interaction) {
		interaction.reply("The prefix is: " + config.PREFIX);
	},
};
