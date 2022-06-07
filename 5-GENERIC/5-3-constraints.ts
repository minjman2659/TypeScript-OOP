{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`Full Time!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`Part Time!`);
    }
    workPartTime() {}
  }

  // Bad Example 💩 : 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지 않음!
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }
  const kim = new FullTimeEmployee();
  const park = new PartTimeEmployee();
  kim.workFullTime();
  park.workPartTime();

  // 💩 pay 메소드밖에 사용 못한다.
  const kimAfterPayBad = payBad(kim);
  const parkAfterPayBad = payBad(park);
  kimAfterPayBad.pay();
  parkAfterPayBad.pay();

  // Good Example ✨ : Generic을 이용! 인터페이스 Employee를 상속한 인스턴스들만을 인자로 받아 해당 인스턴스를 리턴하는 함수로 구현
  function pay<E extends Employee>(employee: E): E {
    employee.pay();
    return employee;
  }
  const kimAfterPay = pay(kim);
  const parkAfterPay = pay(park);
  kimAfterPay.workFullTime();
  parkAfterPay.workPartTime();

  // --------------------------------------------------------------------------------

  //* 아래의 함수 타입을 풀이해보면,
  //* getValue 함수는 객체 'O'와 'O'의 key인 'K'를 인자로 받아 'O' 객체내 'K'의 value를 리턴하는 함수이다!
  function getValue<O, K extends keyof O>(obj: O, key: K): O[K] {
    return obj[key];
  }

  const obj1 = {
    name: 'kim',
    age: 12,
  };
  const obj2 = {
    animal: 'dog',
  };
  console.log(getValue(obj1, 'name')); // kim
  console.log(getValue(obj1, 'age')); // 12
  console.log(getValue(obj2, 'animal')); // dog
}
