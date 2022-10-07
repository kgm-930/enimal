const { buildDefaultInstance } = require('wombo-dream-api');
// const fs = require('fs');

async function test() {
	try {
		const credentials = {
			email: 'ilwoldeveloper@gmail.com',
			password: 'enimal*24',
		};
		const wombo = buildDefaultInstance(credentials);

		const usedStyle = [52, 50, 49, 48, 47, 45]
		
		const generatedTask = await wombo.generatePicture(
			'turtle', // prompt
			usedStyle[0], //
			(taskInProgress) => {
				console.log(
					`[${taskInProgress.id}]: ${taskInProgress.state} | step: ${taskInProgress.photo_url_list.length}`
				);
			},
		);
		console.log(
			`[${generatedTask.id}]: ${generatedTask.state} | final url: ${generatedTask.result?.final}`
		);
	} catch (error) {
		console.error(error);
	}
};

exports.test = test;