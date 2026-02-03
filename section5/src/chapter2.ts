/**
 * 선언 합침
 */

// 1. 타입은 똑같은 이름으로 가진 타입 정의하면 에러 나온다
// type Person = {
//   name: string;
// };

// type Person = {
//   name: string;
// };

// 2. 인터페이스로 똑같은 이름으로 정의해도 에러 안나온다.
// 동일한 이름으로 정의해도 에러 안나오는 이유가 합치기 때문에 그랗다. 선언 합침이라고 부른다.
interface Person {
  name: string;
}

interface Person {
  // name: number; // 에러! 충돌 발생, 서브타입이야도 에러 발생한다. 동일한 타입이어야 한다.
  age: number;
}

const person: Person = {
  name: 'Son',
  age: 27,
};

/**
 * 사용 사례
 * 1. 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
