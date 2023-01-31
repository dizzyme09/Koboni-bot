module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		console.log("Bot is online!");

		client.user.setPresence({
			activities: [{ name: "!help" }],
			status: "online",
		});
	},
};
