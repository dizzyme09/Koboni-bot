module.exports = {
	name: "delay",
	description: "Delay messages!",
	execute(msg, args, client) {
    setTimeout(() => {
      msg.channel.send("Delay");
    }, 1000 * 5);
	},
};