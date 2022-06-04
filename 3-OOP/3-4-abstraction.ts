{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    fillCoffeeBeans(beans: number): void;
    makeCoffee(shots: number): CoffeeCup;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeansGramm: number = 0; // instance(object) level

    private constructor(beans: number) {
      this.coffeeBeansGramm += beans * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    static makeCoffeeMachine(beans: number): CoffeeMachine {
      return new CoffeeMachine(beans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeansGramm += beans * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    clean() {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeansGramm < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not Enough Coffee Beans!');
      }
      this.coffeeBeansGramm -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(3);
      console.log(coffee);
    }
  }

  class ProBaristar {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(3);
      console.log(coffee);
      this.machine.fillCoffeeBeans(35);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeCoffeeMachine(3);
  const amateur = new AmateurUser(maker);
  const pro = new ProBaristar(maker);

  pro.makeCoffee();
  amateur.makeCoffee();
}
