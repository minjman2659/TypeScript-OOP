{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //* 부모 클래스를 추상 클래스로 만들어 자식 클래스에서 공통적인 메소드 및 멤버변수들을 상속받을 수 있다.
  //* 추상 클래스는 인스턴스 객체 생성이 불가능(추상적인 클래스이기 때문)
  //* 자식 클래스에서 공통적으로 사용하는 기능들을 구현할 수 있음
  //* 각 자식 클래스마다 달라져야 하는 내용이 있다면, 해당 부분만 abstract 메소드로 정의할 수 있다 (아래의 extract 메소드)
  abstract class CoffeeMachine implements CoffeeMaker {
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

    //! 추상 메소드로 만들게 된다면, 어떤 인자를 받아서 어떤 것을 리턴하는지만 정의할 수 있지, 실제적인 구현은 불가능하다!
    //* 추상 메소드로 정의한 내용만 각 자식 클래스에서 따로 구현해 나가면 된다!
    //* + 추상 메소드는 반드시 각 자식 클래스에서 정의할 수 있도록 강조할 수 있다.
    protected abstract extract(shots: number): CoffeeCup;

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

    //! 상속받은 메소드를 따로 정의하지 않으면 에러 발생!
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return { shots, hasMilk: true };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    putSugar() {
      console.log('putting sugar...');
    }

    protected extract(shots: number): CoffeeCup {
      this.putSugar();
      return { shots, hasSugar: true };
    }
  }

  const latteMachine = new CaffeLatteMachine(5, 'SS-2022');
  const latte = latteMachine.makeCoffee(1);
  console.log(latteMachine);
  console.log(latte);

  const sugarCoffeeMachine = new SweetCoffeeMachine(5, 'SU-2033');
  const sugarCoffee = sugarCoffeeMachine.makeCoffee(1);
  console.log(sugarCoffeeMachine);
  console.log(sugarCoffee);

  const machines: CoffeeMaker[] = [latteMachine, sugarCoffeeMachine];
  machines.forEach((machine) => {
    console.log('---------------------------------');
    machine.makeCoffee(1);
  });
}
