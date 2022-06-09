// https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts : Array 타입 api 읽어보기!
Array;

// every 메소드 예시
type Student = {
  passed: boolean;
};
const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];
const result: boolean = students.every((student) => student.passed);
console.log(result);

// every 메소드2 예시
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = true;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));
