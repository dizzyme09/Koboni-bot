module.exports = {
	name: "ping",
	description: "Ping Bot",
	execute(msg) {
		msg.channel.bulkDelete(1);
		msg.reply("Pong!");
	},
};
