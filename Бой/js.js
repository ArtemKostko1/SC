class Human {
  constructor(armor, damage) {
    this.name = "";
    this.hp = 100;
    this.armor = armor;
    this.damage = damage;
  }

  wound(dmg) {
    if (this.armor <= 0) {
      this.armor = 0;
      this.hp -= dmg;
      if(this.hp <= 0){
        this.hp = 0;
      }
    } else {
      this.armor -= dmg;
      if(this.armor <= 0){
        this.armor = 0;
      }
    }
  }

  isDead() {
    if (this.hp <= 0) {
      console.log(`${this.name} мёртв ...`);
      this.hp = 0;
      return true;
    }
    return false;
  }
}

class Swordsman extends Human {
  name = "Swordsman";
}

class Archer extends Human {
  name = "Archer";
}

class Mage extends Human {
  name = "Mage";
}

class Viking extends Human {
  name = "Viking";
}

function Random() {
  return Math.floor(Math.random() * 100);
}

function attackOrDefense() {
  var attackChance = Random();
  var blockChance = Random();

  if (attackChance > blockChance) {
    return 1;
  } else {
    return 0;
  }
}

function getStatistics(firstWarior, secondWarior) {
  console.log(`${firstWarior.name}: здоровье - ${firstWarior.hp}, броня - ${firstWarior.armor}`);
  console.log(`${secondWarior.name}: здоровье - ${secondWarior.hp}, броня - ${secondWarior.armor}`);
}

async function attack(firstWarior, secondWarior) {
  if (attackOrDefense() == 1) {
    console.log("Оба воина атакуют");

    await secondWarior.wound(firstWarior.damage);
    await firstWarior.wound(secondWarior.damage);

    getStatistics(firstWarior, secondWarior);
  } else {
    console.log(`${firstWarior.name} - атакует, ${secondWarior.name} - защищается`);

    await secondWarior.wound(firstWarior.damage);

    getStatistics(firstWarior, secondWarior);
  }
}

async function defense(firstWarior, secondWarior) {
  if (attackOrDefense() == 1) {
    console.log(`${firstWarior.name} - защищается, ${secondWarior.name} - атакует`);

    await firstWarior.wound(secondWarior.damage);

    getStatistics(firstWarior, secondWarior);
  } else {
    console.log("Оба воина защищаются");

    await firstWarior.wound(0);

    getStatistics(firstWarior, secondWarior);
  }
}

async function battle(firstWarior, secondWarior) {
  while (!firstWarior.isDead() && !secondWarior.isDead()) {
    if (attackOrDefense() == 1) {
      await attack(firstWarior, secondWarior);
    } else {
      await defense(firstWarior, secondWarior);
    }
    console.log("--------------------------------------------------------------------------");
  }
}

let swordsman = new Swordsman(200, 75);
let archer = new Archer(150, 65);
let mage = new Mage(100, 100);
let viking = new Viking(170, 70);

battle(archer, viking);
