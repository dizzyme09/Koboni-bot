module.exports = {
	name: "kick",
	description: "Kick a user",
	execute(msg, args, client) {
		var roles = msg.member.roles.cache.find((role) => role.name === "Admincoy");
		if (roles) {
			const userKick = msg.mentions.users.first();

			if (userKick) {
				const memberKick = msg.guild.member(userKick);

				if (memberKick) {
					memberKick
						.kick("You have been kicked!")
						.then(() => {
							msg.reply(`Successfully kicked ${userKick.tag}`);
						})
						.catch((err) => {
							msg.reply("I was unable to kick the member");
							console.log(err);
						});
				} else {
					msg.reply("That user isn't in this guild!");
				}
			} else {
				msg.reply("You didn't mention the user to kick!");
			}
		} else {
			return msg.reply("You do not have the role!");
		}
	},
};
