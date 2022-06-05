//* 너무 상속에만 의존하면 수직적인 관계에서 가지는 한계점 및 상속이 깊어짐에 따라 관계가 복잡해지는 등 문제점들이 발생할 수 있음
//* => 각 컴포지션 단위로 나누어서 인터페이스를 따르면서, 각 컴포지션을 조립해 나가자!!!
//* 그렇다고 상속이 무조건 나쁜 것은 아니다.

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 커피 머신
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeansGramm: number = 0; // instance(object) level

    constructor(
      beans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      const milkSteamed = this.milk.makeMilk(sugarAdded);
      return milkSteamed;
    }
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
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

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('fancy steaming some milk...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('cold steaming some milk...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('getting some sugar from candy');
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return { ...cup, hasSugar: true };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('getting some sugar from jar!!!');
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return { ...cup, hasSugar: true };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // Milk
  const cheapMilkFrother = new CheapMilkSteamer();
  const fancyMilkFrother = new FancyMilkSteamer();
  const coldMilkFrother = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const jarSugar = new SugarMixer();
  const noSugar = new NoSugar();

  // 설탕 커피
  const sweetCandyCoffeeMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetCoffeeMachine = new CoffeeMachine(12, noMilk, jarSugar);

  // 라떼
  const latteMachine = new CoffeeMachine(12, cheapMilkFrother, noSugar);
  const fancyLatteMachine = new CoffeeMachine(12, fancyMilkFrother, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkFrother, noSugar);

  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkFrother, candySugar);
}
