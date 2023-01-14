const { Collection } = require("discord.js");

const cooldown = new Collection();

module.exports = {
	name: "cooldown",
	description: "Cooldown messages!",
	execute(msg) {
		if (!cooldown.has(msg.author.id)) {
			msg.channel.send("You are not on cooldown!");
			cooldown.set(msg.author.id);
			setTimeout(() => {
				cooldown.delete(msg.author.id);
			}, 1000 * 5);
		} else {
			msg.reply("You are on cooldown!");
		}
	},
};
