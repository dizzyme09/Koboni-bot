module.exports = {
	name: "check-admin",
	description: "Checks if the user has the Admin role",
	execute(msg, args, client) {
		var roles = msg.member.roles.cache.find((role) => role.name === "Admincoy");
		if (roles) {
			msg.channel.send("You have the role!");
		} else {
			msg.channel.send("You do not have the role!");
		}
	},
};
