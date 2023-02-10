const { getQnA, addQnA } = require("../models/qnaModels.js");

module.exports = {
	name: "qna",
	description: "Get QnA from database",
	execute(msg, args, client) {
		let section = msg.content.split(" | ");
		if (args[1]) {
			if (args[1] === "answer") {
				// ex:
				// !qna answer | GitHub
				getQnA((data) => {
					let ans = "";
					Object.keys(data).map((key) => {
						if (data[key].question === section[1]) {
							ans = data[key].answer;
						}
					});
					if (ans) {
						msg.reply(`${ans}`);
					} else {
						msg.reply(`Sorry, I don't know the answer to that question. Please ask me something else.`);
					}
				});
			} else if (args[1] === "add") {
				// ex:
				// !qna add | GitHub | GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.
				addQnA(section[1], section[2], (message) => {
					msg.reply(`${message}`);
				});
			}
		} else {
			msg.reply(`Please insert your second argument.`);
		}
	},
};
