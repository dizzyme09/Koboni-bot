module.exports = {
	name: "ban",
	description: "Ban a user",
	execute(msg) {
		var roles = msg.member.roles.cache.find((role) => role.name === "Admincoy");
		if (!roles) {
			return msg.reply("You do not have the role!");
		} else {
			const userBan = msg.mentions.users.first();

			if (userBan) {
				const memberBan = msg.guild.member(userBan);

				if (memberBan) {
					memberBan
						.ban({
							reason: "You have been banned!",
						})
						.then(() => {
							msg.reply(`Successfully banned ${userBan.tag}`);
						})
						.catch((err) => {
							msg.reply("I was unable to ban the member");
							console.log(err);
						});
				} else {
          msg.reply("That user isn't in this guild!");
        }
			} else {
				msg.reply("You didn't mention the user to ban!");
			}
		}
	},
};
