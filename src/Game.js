class Game{
    constructor(){
        this.p1 = {
            name: '',
            hp: 1
        };
        this.p2 = {
            name: '',
            hp: 1
        };
        this.attackLog = [];
        // whoevers in pos 0 its their turn
        this.turnTracker = []
        this.gameStatus = true;
    }

    start (p1,p2) {
        this.p1.name = p1;
        this.p2.name = p2;
        this.turnTracker = [this.p1,this.p2]
        this.p1.hp = 100;
        this.p2.hp = 100;
        this.attackLog = [];
    }

    attack () {
        this.turnTracker[1].hp -= 10
        this.attackLog.push(`${this.turnTracker[0].name} attacks ${this.turnTracker[1].name}`)
       

        console.log(`TurnTrackerHP: ${this.turnTracker[1].hp}`)

        if (this.turnTracker[1].hp < 1) {
            console.log(`TurnTrackerHP: ${this.turnTracker[1].hp}`)
            console.log('Lose')
            return this.lose()
        }

        //Happen at end
         this.switchTurn()

    }   

    lose () {
        console.log('You lose, you get nothing!')
        this.gameStatus = false;
        return `${this.turnTracker[0]} has beaten ${this.turnTracker[1]}`
    }

    switchTurn() {
        this.turnTracker.reverse()
    }

}

module.exports = Game