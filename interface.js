const readline = require('readline');
const { createRangeTower, createEnemy } = require('./enemy');
const { startGame } = require('./game');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

async function readLine(str) {
	return new Promise((resolve) => {
		rl.question(str, (answer) => {
			resolve(answer);
		});
	});
}

(async function main() {
	const range = await readLine('Set range tower: ');
	const enemy = await readLine('Set name enemy: ');
	const dictance = await readLine('Set distantce: ');
	const speed = await readLine('Set speed: ');
	if (
		!Number.isInteger(range) ||
		!Number.isInteger(dictance) ||
		!Number.isInteger(speed)
	) {
		console.log(
			'\nPlease check the entered numbers!\nPress "C" to exit and try again'
		);
		return;
	}
	const bot = await createEnemy(enemy, dictance, speed);
	const tower = await createRangeTower(range);
	startGame(tower, bot);
	rl.close();
})();
