{
  /**
   * Type Inference
   */
  let text = 'hello';
  // text = 121 => 이미 string 값을 할당받은 변수에 다른 타입의 값을 할당하려 할 경우 에러 발생

  function print(message = 'string') {
    console.log(message);
  }
  print('world');

  // 숫자끼리 더하면 숫자가 리턴되기 때문에 자동으로 함수에 숫자 타입이 지정됨
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);

  //* ✨ 하지만 타입을 정확하게 명시하는 것이 가독성 면에서 더 좋다.
  const addResult: number = add(2, 3);
}
