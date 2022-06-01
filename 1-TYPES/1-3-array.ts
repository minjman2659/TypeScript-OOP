{
  // Array
  const fruits: string[] = ['apple', 'banana']; // <- 더 선호!
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    //* readonly 속성이 붙은 타입은 수정이 불가능하다.
    // fruits.push('');
  }

  // Tuple 💩 -> interface, type alias, class 로 대체해서 사용하는 것이 더 좋음!
  let student: [string, number];
  student = ['kim', 12];
  student[0]; // 'kim'
  student[1]; // 12
  const [name, age] = student;
}
