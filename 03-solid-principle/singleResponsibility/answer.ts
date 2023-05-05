export {};

class EmployeeData {
  constructor(public name: string, public department: string) {}
}

class PayCalculator {
  private getRegularHours() {
    console.log("給与計算用の時間計算");
  }

  calculatePay(data: EmployeeData) {
    this.getRegularHours();
    console.log(`${data.name}の給与計算`);
  }
}

class HourReporter {
  private getRegularHours() {
    console.log("HourReporter: getRegularHours");
  }

  reportHours(data: EmployeeData) {
    this.getRegularHours();
    console.log(`${data.name}: reportHours`);
  }
}

class EmployeeRepository {
  save() {}
}

function run() {
  const employeeData = new EmployeeData("スズキ", "開発");
  const payCalculator = new PayCalculator();
  const hourReporter = new HourReporter();

  console.log("経理部門");
  payCalculator.calculatePay(employeeData);
  console.log("");
  console.log("人事部門");
  hourReporter.reportHours(employeeData);
}

run();
