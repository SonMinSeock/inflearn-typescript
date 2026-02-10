/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

// typeof 연산자 이용하여 값을보고 타입 추론 가능하다.
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: 'Son',
  age: 28,
};

getPropertyKey(person, 'name'); // Son
