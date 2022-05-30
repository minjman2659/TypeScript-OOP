{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript : 자바스크립트는 물론 타입스크립트에서도 활용가능한 문법
  // 1. Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Kim', 'minjae');
  printName('Park');
  printName('An', undefined);

  // 2. Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // 3. Rest parameter
  function addNumbers(...rest: number[]) {
    console.log(rest.reduce((acc, cur) => acc + cur, 0));
  }
  addNumbers(1, 2, 3, 4, 5);
  addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}
