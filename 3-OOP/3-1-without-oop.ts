{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT = 7;

  let coffeeBeansGramm = 0;

  function makeCoffee(shots: number): CoffeCup {
    if (coffeeBeansGramm < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not Enough Coffee Beans!');
    }
    coffeeBeansGramm -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeansGramm += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
