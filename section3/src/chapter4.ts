/**
 * 대수타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
let union1: Union1 = {
  name: '뚜비',
  color: 'white',
};
let union2: Union1 = {
  name: '',
  language: '',
};
let union3: Union1 = {
  name: '',
  language: '',
  color: '',
};

// 에러발생
// let union4: Union1 = {
//     name: ""
// }

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string; // never 타입 (기본타입 가지고 교집합 하면 거의 never 타입됨)
type Intersection = Dog & Person;
let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};

// 에러 발생
// let intersection2: Intersection = {
//   name: '',
//   color: '',
// };
