function getRandom(min, max) {
	let random = min + Math.random() * (max + 1 - min);
	return Math.ceil(random);
}

function createRangeTower(range) {
	let firingRange = getRandom(1, range);
	return firingRange;
}

function createEnemy(name, distance, speed) {
	const enemies = [];
	let enemyCount = getRandom(1, 99);
	for (let i = 0; i < enemyCount; i++) {
		let newEnemy = {
			name: name + i.toString(),
			distance: getRandom(1, distance),
			speed: getRandom(1, speed),
		};
		enemies.push(newEnemy);
	}
	return enemies;
}

module.exports = { createRangeTower, createEnemy };
