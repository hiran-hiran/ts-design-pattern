export {};

interface IEmployee {
  name: string;
  getBonus(base: number): number;
}

class Junior implements IEmployee {
  constructor(public name: string) {}
  getBonus(base: number): number {
    return Math.floor(base * 1.1);
  }
}
class Middle implements IEmployee {
  constructor(public name: string) {}
  getBonus(base: number): number {
    return Math.floor(base * 1.5);
  }
}
class Senior implements IEmployee {
  constructor(public name: string) {}
  getBonus(base: number): number {
    return Math.floor(base * 2);
  }
}
class Expert implements IEmployee {
  constructor(public name: string) {}
  getBonus(base: number): number {
    return Math.floor(base * 3);
  }
}

function run() {
  const emp1 = new Junior("山田");
  const emp2 = new Middle("佐々木");
  const emp3 = new Senior("スズキ");
  const emp4 = new Expert("平田");

  const base = 100;
  console.log(emp1.getBonus(base));
  console.log(emp2.getBonus(base));
  console.log(emp3.getBonus(base));
  console.log(emp4.getBonus(base));
}

run();
