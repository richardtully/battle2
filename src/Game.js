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
        this.gameStatus = 'The battle is underway';
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
        // this.turnTracker[1].hp -= Math.ceil(Math.random()*10)
        this.turnTracker[1].hp -=10
        this.attackLog.push(`${this.turnTracker[0].name} attacks ${this.turnTracker[1].name}`)
        // If nobody loses, switch turns
        this.turnTracker[1].hp < 1 ? this.lose() : this.switchTurn()
    }   

    lose () {
        this.gameStatus = `${this.turnTracker[0].name} has beaten ${this.turnTracker[1].name}`;
    }

    switchTurn() {
        this.turnTracker.reverse()
    }

}

module.exports = Game