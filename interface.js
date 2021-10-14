const readline = require('readline');
const { createRangeTower, createEnemy } = require('./creation');
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
	const rangeTower = Number.parseInt(range);
	const enemyDistance = Number.parseInt(dictance);
	const enemySpeed = Number.parseInt(speed);
	if (
		!Number.isInteger(rangeTower) ||
		!Number.isInteger(enemyDistance) ||
		!Number.isInteger(enemySpeed)
	)
		console.log(
			'\nPlease check the entered numbers!\nPress "Ctrl + C" to exit and try again'
		);
	const bot = createEnemy(enemy, enemyDistance, enemySpeed);
	const tower = createRangeTower(rangeTower);
	startGame(tower, bot);
	rl.close();
})();
