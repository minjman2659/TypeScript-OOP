{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 5
  console.log((result as string[]).push('world')); // 😱 string 타입인데도 불구하고 array로 타입을 단언하므로서 컴파일시 에러가 발생하지 않음!
  console.log((<string[]>result).push('!!'));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.pop(); // 😱 '!' 역시 단언으로, 정말정말 확신하는 값을 제외하고는 절대 사용 X
}
