// javascript에서는 자신을 호출한 것이 this가 된다.

console.log(this); // Window

function simpleFunc() {
  console.log(this);
}
window.simpleFunc(); // Window
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // Counter
const caller = counter.increase;
// let과 const로 선언하는것은 Window에 등록되는것이 아니기 때문에 그 어떤것이 호출하는 상태가 아니기에
caller(); // Undefined 가 출력된다.  단, var는 Window에 등록됨..

// binding을 하면 정보를 잃어버리지 않을 수 있다.
const caller2 = counter.increase.bind(counter);
caller2(); // Counter

// 또는 함수를 에로우 펑션으로 만들면 된다. 선언될 당시의 문맥을 기억함
class CounterArrow {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
const counterArrow = new CounterArrow();
const caller3 = counterArrow.increase;
caller3(); // CounterArrow


class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // run()함수를 bob이 호출했기 때문에 this는 Bob이 나온다.