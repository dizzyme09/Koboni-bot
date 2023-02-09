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

module.exports = { getQnA };
