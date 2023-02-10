const interactions = require("../config/interactionHandler.js");

module.exports = {
	name: "interactionCreate",
	once: false,
	execute(interaction, client) {
		if (!interaction.isCommand()) return;

		const { commandName } = interaction;

		if (!interactions.has(commandName)) return;

		interactions.get(commandName).execute(interaction);
	},
};
