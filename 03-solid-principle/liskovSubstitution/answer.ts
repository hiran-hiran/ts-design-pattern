export {};

interface Shape {
  getArea: number;
}

class Rectangle implements Shape {
  private width = 0;
  private height = 0;

  setWidth(w: number) {
    this.width = w;
  }
  setHeight(h: number) {
    this.height = h;
  }
  get getArea() {
    return this.width * this.height;
  }
}

class Square implements Shape {
  private length = 0;

  set setLength(l: number) {
    this.length = l;
  }

  get getArea() {
    return this.length * this.length;
  }
}

function f(shape: Shape) {
  console.log(shape.getArea);
}

function run() {
  const r1 = new Rectangle();
  r1.setWidth(3);
  r1.setHeight(4);
  f(r1);

  const s1 = new Square();
  s1.setLength = 5;
  f(s1);
}

run();
