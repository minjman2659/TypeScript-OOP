const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;

  //* Instance member level
  //* : CoffeeMachine 클래스가 makeCoffeeInstance 메소드를 가지고 있음
  /**
   * 
   * this.makeCoffeeInstance = (shots) => {
    console.log('Instance making...');
  }; */
}
//* Prototype member level
//* 여전히 인스턴스 메소드지만, CoffeeMachine 안이 아니라 prototype 객체 안에 들어있는 것을 확인할 수 있다!
CoffeeMachine.prototype.makeCoffeeInstance = (shots) => {
  console.log('Instance making...');
};
//* Static level
CoffeeMachine.makeCoffeeStatic = (shots) => {
  console.log('Static making...');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

machine1.makeCoffeeInstance(2);
CoffeeMachine.makeCoffeeStatic(2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffeeInstance();
