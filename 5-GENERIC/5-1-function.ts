{
  // Bad Example 💩 : number 뿐만 아니라 string, boolean 등 여러 타입을 체킹하는 함수를 구현하고 싶다면 일일이 다 정의해야함
  function checkNotNullBad1(arg: number | null): number {
    if (arg === null) {
      throw new Error('Not Valid Number!');
    }
    return arg;
  }
  const result1 = checkNotNullBad1(123);
  console.log(result1);
  checkNotNullBad1(null);

  // Bad Example 💩 : any 타입은 타입이 안전하지 않기 때문에 좋지 않은 함수
  function checkNotNullBad2(arg: any | null): any {
    if (arg === null) {
      throw new Error('Not Valid Number!');
    }
    return arg;
  }
  const result2 = checkNotNullBad2(123);
  console.log(result2);

  // Good Example ✨
  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error('Not Valid Number!');
    }
    return arg;
  }
  const number: number = checkNotNull(123);
  const boal: boolean = checkNotNull(false);
}
