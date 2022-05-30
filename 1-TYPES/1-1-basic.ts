{
  /**
   * In JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array, object ...
   */

  /**
   * In TypeScript
   */
  // number
  const num: number = 12;

  // string
  const str: string = '12';

  // boolean
  const boal: boolean = true;

  // undefined : 값이 있는지 없는지 아무것도 결정되지 않은 상태
  let name: undefined; // <- 💩 이렇게 사용하지는 않음
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(array: number[], targetNumber: number): number | undefined {
    if (array.includes(targetNumber)) {
      return targetNumber;
    } else {
      return undefined;
    }
  }

  // null : 값이 비었다는 것이 결정된 상태
  let person: null; //  <- 💩 이렇게 사용하지는 않음
  let person2: string | null;
  person2 = 'kim';
  person2 = null;

  // unknown 💩 : 어떤 타입인지 알 수 없는 <- 되도록이면 사용하지 않도록!
  let notSure: unknown = 0;
  notSure = 'hello';
  notSure = true;

  // any 💩 : 어떤 타입이든 할당할 수 있음 <- 역시 되도록이면 사용하지 않도록!
  let anything: any;
  anything = 0;
  anything = 'world';

  // void : 아무것도 리턴하지 않을 때 사용
  function print(): void {
    console.log('hello');
  }
  let unusable: void = undefined; // 💩 변수에는 사용하지 않는 타입

  // never : 보통 에러 핸들링에 사용하며, 함수가 죽어 리턴하는 값이 절대 없을 때 사용
  function throwError(message: string): never {
    throw new Error(message);
  }
  function infinityLoop(): never {
    while (true);
  }
  let neverEnding: never; // 💩 변수에는 사용하지 않는 타입

  // object : 모든 참조형 타입의 데이터를 다룰 수 있음
  let obj: object; // 💩 되도록 사용하지 않는 편이 좋다
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'kim' });
  acceptSomeObject({ age: 12 });
}
