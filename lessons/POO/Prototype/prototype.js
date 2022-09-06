function Enemy(name, level, emoji, attackName) {
    this.name = name;
    this.level = level;
    this.emoji = emoji;
    this.attackName = attackName;
}

Enemy.prototype.attack = function () {
    return `${this.name} ${this.attackName} you!`;
};


const enemies = [
    new Enemy("Spider", 1, "🕷", "bites"),
    new Enemy("Snake", 6, "🐍", "bites"),
    new Enemy("Bear", 25, "🐻", "scratches"),
];

console.log(enemies[0]);
console.log(enemies[0].attack());