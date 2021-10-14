# Code Challenge!


# To launch:
```

check your node.js version >=14
npm install
npm start
OR
node interface
```

# Problem Statement:
Program should simulate a game where the goal is to kill the enemies by using a tower. 
Need to kill enemies as fast as possible. At each turn first the tower fires one time then each enemy moves to the tower. If an enemy reaches the tower you lose.

## Input:
The first line is the tower's firing range. Each next line represents an enemy:
1. first column - is the enemy name.
2. second column - is the initial distance to the tower.
3. the last one - is the unit speed.

## Output:  
At each turn program should inform if the tower killed the enemy unit.
At the end program should inform if the tower WINS or LOSES and the count of played turns.
In case of lost the program should calculate the minimal tower's firing distance to win the game against same set of enemies.

## Sample:

### Sample Input 
```
50m 
BotA 100m 10m
BotB 50m 20m
BotC 30m 20m
```

### Sample Output
```
Firing range is 50m
Turn 1: Kill BotC at 30m
Turn 2: Kill BotB at 30m
Turn 6: Kill BotA at 50m
You win in 6 turns
```

## Tasks
- Create programmatic simulator for this game that has to be executed on node.js
