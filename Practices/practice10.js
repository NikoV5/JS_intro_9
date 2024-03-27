// Task 1

class Player {
    constructor(nickName, score) {
      this.nickName = nickName;
      this.score = score;
    }


    getInfo() {
      return `${this.nickName}'s score is ${this.score}.`;
    }
    attack(otherPlayer) {
      this.score++;
      otherPlayer.score--;

      return `${this.nickName} attacked ${otherPlayer.nickName}.`;
    }
    damage() {
      this.score--;
      return`${this.nickName} received damage.`;
    }
}


  
class SuperPlayer extends Player {
    constructor (nickName, score) {
        super(nickName, score)
    }

    superAttack(otherPlayer) {
        this.score += 2;
        otherPlayer.score -= 2;
    }
}

class HeroPlayer extends Player {
    constructor (nickName, score) {
        super(nickName, score)
    }


    heal(otherPlayer) {
        otherPlayer.score++;
    }
}

const player1 = new Player('Player1', 5)
const player2 = new Player('Player2', 5)

const superPlayer1 = new SuperPlayer('Super Player', 3);
const heroPlayer1 = new HeroPlayer('Hero Player', 10);




console.log(player1.attack(player2));

console.log(player1.attack(superPlayer1));

superPlayer1.superAttack(player2);
superPlayer1.superAttack(player1);
superPlayer1.superAttack(heroPlayer1);


heroPlayer1.heal(player1);
heroPlayer1.heal(player2);

console.log(player1.attack(superPlayer1))
console.log(player2.attack(superPlayer1))
heroPlayer1.attack(superPlayer1)

console.log(player1.damage())
console.log(player2.damage())

console.log('\n---------------------------------------------\n');


console.log(player1.getInfo());
console.log(player2.getInfo())
console.log(superPlayer1.getInfo())
console.log(heroPlayer1.getInfo());


/*
EXPECTED OUTPUT:
Player 1's score is 6
Player 2's score is 3
Super Player's score is 5
Hero Player's score is 9
*/


