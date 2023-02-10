const { Collection } = require("discord.js");
const fs = require("fs");

const interactions = new Collection();

const interactionFiles = fs.readdirSync("./commands/interactions").filter((file) => file.endsWith(".js"));

for (const file of interactionFiles) {
	const interaction = require(`../commands/interactions/${file}`);
	interactions.set(interaction.name, interaction);
}

module.exports = interactions;
