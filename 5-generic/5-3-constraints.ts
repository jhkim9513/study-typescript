interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 안좋다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// generic이긴한데 Employee를 확장한 타입만 가능하다!
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const kim = new FullTimeEmployee();
const lee = new PartTimeEmployee();
kim.workFullTime();
lee.workPartTime();

const kimAfterPay = pay(kim);
const leeAfterPay = pay(lee);

const obj = {
  name: 'kim',
  age: 20,
};

const obj2 = {
  animal: 'dog',
}

// K는 T가 가지는 key중에 하나의 타입이어야 한다.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); // kim
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // dog
