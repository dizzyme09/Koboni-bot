module.exports = {
	name: "remove-role",
	description: "Remove a role Member to a user",
	execute(msg, args, client) {
		if (msg.member.roles.cache.find((role) => role.name === "Admincoy")) {
			const user = msg.mentions.users.first();

			if (user) {
				const userSet = msg.guild.members.cache.find((member) => member.id === user.id);
				if (userSet) {
					var role = msg.guild.roles.cache.find((role) => role.name === "Member");
					var member = msg.guild.members.cache.find((member) => member.id === user.id);

					member.roles.remove(role.id);
					msg.reply(`Successfully removed the role from ${userSet}`);
				} else {
					msg.reply("That user isn't in this guild!");
				}
			} else {
				msg.reply("You didn't mention the user to remove the role!");
			}
		} else {
			msg.reply("You do not have the role!");
		}
	},
};
