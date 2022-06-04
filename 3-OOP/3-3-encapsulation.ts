{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeansGramm: number = 0; // instance(object) level

    private constructor(beans: number) {
      this.coffeeBeansGramm += beans * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    static makeCoffeeMachine(beans: number): CoffeeMaker {
      return new CoffeeMaker(beans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeansGramm += beans * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    makeCoffee(shots: number): CoffeCup {
      if (this.coffeeBeansGramm < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not Enough Coffee Beans!');
      }
      this.coffeeBeansGramm -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMachine = CoffeeMaker.makeCoffeeMachine(3);
  console.log(coffeeMachine);
  coffeeMachine.fillCoffeeBeans(5);
  console.log(coffeeMachine);

  class User {
    constructor(private firstName: string, private lastName: string) {}

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    set newName(newFirstName: string) {
      this.firstName = newFirstName;
    }
  }

  const user = new User('kim', 'minjae');
  console.log(user.fullName);
  user.newName = 'park';
  console.log(user.fullName);
}
