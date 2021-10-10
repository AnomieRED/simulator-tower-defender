function startGame(tower, enemy) {
	const sumEnemies = enemy;
	const rangeTower = tower;
	let tunrsCount = 0;

	findTarget(rangeTower, sumEnemies);

	function findTarget(rangeTower, sumEnemies) {
		const dead = [];
		const survivors = [];

		sumEnemies.forEach((enemy) => {
			if (enemy.distance < rangeTower) {
				dead.push(enemy);
			} else if (enemy.distance > rangeTower) {
				survivors.push(enemy);
			}
		});

		++tunrsCount;

		if (dead.length !== 0) {
			firingReport(rangeTower);
			murderReport(dead);
		}

		if (survivors.length === 0) {
			towerReport();
		}
		return enemiesTurns(survivors, rangeTower);
	}

	function enemiesTurns(enemies, range) {
		const turnsEnemies = [];
		const towerRange = range;
		if (enemies.length === 0) {
			return;
		} else {
			for (let i = 0; i < enemies.length; i++) {
				enemies[i].distance -= enemies[i].speed;
				turnsEnemies.push(enemies[i]);
				if (enemies[i].distance <= 0) {
					return console.log(`Enemies WINS in ${tunrsCount} turn(s)`);
				}
			}
			return findTarget(towerRange, turnsEnemies);
		}
	}

	function firingReport(rangeTower) {
		console.log(`\nFiring range is ${rangeTower}`);
	}

	function murderReport(enemy) {
		for (let i = 0; i < enemy.length; i++) {
			console.log(
				`Turn ${tunrsCount}: Kill ${enemy[i].name} at ${enemy[i].distance}m`
			);
		}
	}

	function towerReport() {
		console.log(`Tower WIN in ${tunrsCount} turn(s)`);
	}
}

module.exports = { startGame };
