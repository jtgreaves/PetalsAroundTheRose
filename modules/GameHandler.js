export class GameHandler {

    startGame() {
        return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
    }

    checkAnswer(answer, dice) {
        var petalSum = 0
        for (var x = 0; x < 6; x++) {
            if (dice[x] == 3) { petalSum += 2 } else if (dice[x] == 5) { petalSum += 4 }
        }

        console.log("Checking - " + answer + " against " + petalSum);
        if (petalSum == answer) {
            return true
        } else {
            return false
        }
    }
}