class Human {
  constructor(armor, damage) {
    this.class = "";
    this.hp = 100;
    this.armor = armor;
    this.damage = damage;
  }

  get getHp() {
    return this.hp;
  }

  get getArmor() {
    return this.armor;
  }

  get getDamage() {
    return this.damage;
  }

  set setHp(value) {
    if (value < 0) {
      return;
    }

    this.hp = value;
  }

  set setArmor(value) {
    if (value < 0) {
      return;
    }

    this.armor = value;
  }

  getDamage(dmg) {
    if (this.hp <= 0) {
      this.setHp(0);

      this.isDead();
    }

    if (this.armor == 0) {
      this.setHp(this.hp - dmg);
    } else {
      this.setArmor(this.armor - dmg);
    }
  }

  isDead() {
    if (this.hp <= 0) {
      console.log(`${this.class} мёртв ...`);
      return true;
    }
    return false;
  }
}

class Swordsman extends Human {
  class = "Swordsman";
}

class Archer extends Human {
  class = "Archer";
}

class Mage extends Human {
  class = "Mage";
}

class Viking extends Human {
  class = "Viking";
}

let swordsman = new Swordsman(200, 35);
let archer = new Archer(150, 25);
let mage = new Mage(100, 50);
let viking = new Viking(200, 30);
