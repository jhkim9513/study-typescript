{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //  public : 접근 가능
  //  private : 어떤곳에서도 직접 접근이 불가능
  //  protected  : 상속한곳에서는 접근이 가능
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT:number = 7; // class level ( object마다 만들어지지 않기 때문에 memory 낭비를 예방할 수 있다 )
    private coffeeBeans: number = 0; // instance (object) level
  
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');      
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      }
    };
  }

  const maker = CoffeeMaker.makeMachine(32);
  console.log(maker);
  maker.fillCoffeeBeans(32);
  console.log(maker);
}