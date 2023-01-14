module.exports = {
	name: "delay",
	description: "Delay messages!",
	execute(msg) {
    setTimeout(() => {
      msg.channel.send("Delay");
    }, 1000 * 5);
	},
};