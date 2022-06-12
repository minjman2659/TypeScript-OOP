/**
 * interface는 **규격사항**을 정의한 내용으로, 객체들 간의 혹은 프로그래머들 간의 약속을 정의한 내용! (보통 class)
 * type은 어떠한 데이터를 담을 떄, 어떤 데이터를 담을 수 있을지 그 타입을 정의한 것!
 */
{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // ★: type 과 interface 둘다 가능할 때
  // ☆: 둘중 하나만 가능할 때

  // ★ Object(객체)
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  };

  // ★ Class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // ★ Extends(확장)
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // ☆ 오직 interface만 가능한 merge
  // : interface를 재정의할 경우, 두 interface가 결합된 형태로 존재하게 됨
  interface PositionInterface {
    z: number;
  }

  // ☆ 오직 type만 가능한 computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  // ☆ 오직 type만 union type이 가능하다.
  type Direction = 'left' | 'right';
}
