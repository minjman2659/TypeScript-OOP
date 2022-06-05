{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 커피 머신
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

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log('steaming some milk...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log('getting some sugar from candy');
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return { ...cup, hasSugar: true };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilkSteamer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      public readonly serialNumber: string,
      private sugarMixer: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugarMixer.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milkFrother: CheapMilkSteamer,
      private sugarMixer: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const latte = this.milkFrother.makeMilk(coffee);
      const sweetCaffeLatte = this.sugarMixer.addSugar(latte);
      return sweetCaffeLatte;
    }
  }

  const milkFrother = new CheapMilkSteamer();
  const sugarMixer = new AutomaticSugarMixer();

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(1),
    new CaffeLatteMachine(1, 'LA-2022', milkFrother),
    new SweetCoffeeMachine(1, 'SU-2022', sugarMixer),
    new SweetCaffeLatteMachine(1, milkFrother, sugarMixer),
  ];
  machines.forEach((machine) => {
    console.log('---------------------------------');
    machine.makeCoffee(1);
  });
}
