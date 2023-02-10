const firebase = require("../db/firebaseConfig.js");

const getQnA = (callback) => {
	firebase.ref(`qna`).once(
		"value",
		(snapshot) => {
			const data = snapshot.val();
			callback(data);
		},
		(err) => {
			console.log(err);
		}
	);
};

const addQnA = (question, answer, callback) => {
	firebase.ref(`qna`).push().set({
		answer: answer,
		question: question,
	});

	callback("Add QnA Success");
};

module.exports = { getQnA, addQnA };
