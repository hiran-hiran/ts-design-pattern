export {};

// 1
class Employee {
  id: number;
  name: string;
  salary: number;

  work() {
    console.log("働きます");
  }
  protected getSalary(): number {
    return this.salary;
  }
  protected setSalary(salary: number): void {
    this.salary = salary;
  }
}

interface Shape {
  calcArea(): number;
}

class Client {
  private shape: Shape;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  calcArea() {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  private radius: number;

  calcArea() {
    return this.radius * this.radius * Math.PI;
  }
}
