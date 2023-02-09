const { getQnA } = require("../models/qnaModels.js");

module.exports = {
	name: "qna",
	description: "Get QnA from database",
	execute(msg, args, client) {
		if (args[1]) {
			getQnA((data) => {
				let ans = "";
				Object.keys(data).map((key) => {
					if (data[key].question === args[1]) {
						ans = data[key].answer;
					}
				});
				if (ans) {
					msg.reply(`${ans}`);
				} else {
					msg.reply(`Sorry, I don't know the answer to that question. Please ask me something else.`);
				}
			});
		} else {
			msg.reply(`Please ask me a question.`);
		}
	},
};
