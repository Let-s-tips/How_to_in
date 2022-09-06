class Character{
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

class Enemy extends Character{
    constructor(name, level, emoji, attackName) {
        super(name, level);
        this.emoji = emoji;
        this.attackName =  attackName;
        this.enemy = true;
    }
    attack() {
        return `${this.name} ${this.attackName} you!`;
    };

}

const spider = new Enemy("Spider", 1, "🕷", "bites");

console.log(spider.name);
