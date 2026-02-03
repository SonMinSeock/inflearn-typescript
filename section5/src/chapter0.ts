/**
 * 인터페이스
 */
interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  // 호출 시그니처
  sayHi(): void;
  sayHi(a: number, b: number): void; // 메서드 오버로딩 한다고 하면 호출 시그니처로 해야한다!
}

const person: Person = {
  name: 'Son',
  sayHi: function () {
    console.log('Hi');
  },
};

person.sayHi();
person.sayHi(1, 2);
// person.name = "kim";
