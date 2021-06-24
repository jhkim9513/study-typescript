{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // abstract 추상 클래스로 지정하면 이 클래스 자체로 생성 불가하다
  // 대신 이 클래스를 상속받는 클래스들이 공통으로 쓰지만 기능은 다른 함수가 있다면 
  // 이곳에서 함수 앞에 abstract 선언을 해주면 된다.
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT:number = 7;
    private coffeeBeans: number = 0;
  
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');  
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up..');
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    };
  }

  //class를 상속할 때는 extends 
  class CafeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk... ');
    }
    
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      }
    }
  }

  // 기본적으로 CoffeeMachine[] 타입이지만 CoffeeMachine이 CoffeeMaker를 상속받기에
  // CoffeeMaker[] 타입으로 지정하여 makeCoffee() 함수만 사용하도록 할 수 있다.
  const machines: CoffeeMaker[]= [
    new CafeeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CafeeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];
  // 내부적으로 구현된 다양한 class들이 한가지 인터페이스를 구현하거나 동일한 class를 상속했을 때
  // 공통된 api를 호출할 수 있는것이 장점 : 다형성
  machines.forEach(machine => {
    console.log('-----------------------');
    machine.makeCoffee(1);
  });
}