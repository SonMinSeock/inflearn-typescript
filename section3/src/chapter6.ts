/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

// 빈 객체로 할당하고 나중에 name, age 프로퍼티 값을 넣고 싶다.
// let person: Person = {};
// person.name = 'Son';
// person.age = 27;

// 타입 단언 해주면된다. -> as 키워드.
let person = {} as Person;
person.name = 'Son';
person.age = 27;

/**
 * 만약에 Dog 타입인데 추후에 갑자기 breed를 추가 하고싶은거다.
 * 타입을 직접 정의하면 에러나온다. 초과 프로퍼티 오류 발생한다.
 */
// type Dog = {
//   name: string;
//   color: string;
// };

// let dog: Dog = {
//   name: '뚜비',
//   color: 'white',
//   breed: '비숑',
// };

// 타입 단언 이용하면 해결
type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: '뚜비',
  color: 'white',
  breed: '비숑',
} as Dog;

/**
 * 타입 단언 규칙
 * 타입 단언 사용하는 방법이 다 되는게 아니고 아래 조건이 만족 해야한다.
 * 값 as 단언 <- 단언 식
 * A as B
 * 1. A가 B의 슈퍼 타입 이거나
 * 2. A가 B의 서브 타입 이어야 한다.
 */
let num1 = 10 as never; // 1번 조건 만족
let num2 = 10 as unknown; // 2번 조건 만족

// let num3 = 10 as string; // 1번 조건 X, 2번 조건 X, 단언 안됨
let num3 = 10 as unknown as string; // 단언 두 번한다. 이 방식 좋지 않음!

/**
 * const 단언
 * const로 단언하면 마치 const로 선언 한 것 처럼 타입을 추론해준다. (값 리터럴 타입으로 추론 해줌)
 */
let num4 = 10 as const;

/**
 * const 단언은 객체 타입일때 많이 활용된다.
 * 객체의 모든 프로퍼티를 읽기 전용으로 하고 싶을때 const 단언 이용한다.
 */
const cat = {
  name: '야옹이',
  color: 'yellow',
} as const;

/**
 * Non Null 단언
 * undefined 아니거나 null도 아니야 이런 단언 하고 싶을때 사용
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: 'Son',
};

// let len1: number = post.author?.length; // '?.' -> 옵셔널 체이닝 기법이다. author 값이 undefined이면 undefined으로 할당

// post의 author 값이 undefined 아니고 null도 아니라고 단언 하고 싶을때 '!' 사용하면된다.
let len: number = post.author!.length;
