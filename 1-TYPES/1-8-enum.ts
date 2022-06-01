{
  /**
   * Enum
   */
  // JavaScript에는 존재하지 않는 타입
  const MAX_NUM = 12;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY; // 0

  // TypeScript Enum : 💩 가능한 한 Enum 타입을 사용하지 않는 것이 좋다!
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  console.log(Days.Thursday);
  let days: Days = Days.Friday;
  //* Enum 타입이 지정된 변수에 다른 숫자 값의 할당이 가능하다는 것이 가장 큰 문제점 => 타입이 보장되지 않는다
  days = 10;
  console.log(days);
  console.log(Days.Friday);

  //* ✨ Union 타입으로 정의하는 것이 더 선호됨! => 타입이 보장된다!
  type UnionDays = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: UnionDays = 'Wednesday';
  dayOfWeek = 'Monday';
}
