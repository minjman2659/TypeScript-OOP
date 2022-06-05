{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeansGramm: number = 0; // instance(object) level

    constructor(beans: number) {
      this.coffeeBeansGramm += beans * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
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
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('steaming milk...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    putSugar() {
      console.log('putting sugar...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.putSugar();
      return { ...coffee, hasSugar: true };
    }
  }

  const coffeeMachine = new CoffeeMachine(5);
  const coffee = coffeeMachine.makeCoffee(1);
  console.log(coffeeMachine);
  console.log(coffee);

  const latteMachine = new CaffeLatteMachine(5, 'SS-2022');
  const latte = latteMachine.makeCoffee(1);
  console.log(latteMachine);
  console.log(latte);

  const sugarCoffeeMachine = new SweetCoffeeMachine(5, 'SU-2033');
  const sugarCoffee = sugarCoffeeMachine.makeCoffee(1);
  console.log(sugarCoffeeMachine);
  console.log(sugarCoffee);

  const machines: CoffeeMaker[] = [
    coffeeMachine,
    latteMachine,
    sugarCoffeeMachine,
  ];
  machines.forEach((machine) => {
    console.log('---------------------------------');
    machine.makeCoffee(1);
  });
}
