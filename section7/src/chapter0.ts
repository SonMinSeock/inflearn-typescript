/**
 * 제네릭
 * 제네릭 함수를 정의하여 인수를 입력받아 입력받은 타입으로 반환 해주도록 활용 가능하다.
 * 제네릭 용어 -> 포괄적인, 일반적인
 * 제네릭 비슷한 단어가 '제네럴'이다. ex) 종합 병원(제네럴 호스피털)
 */

/**
 * 제네릭 함수
 * T는 타입 변수의 의미로 사용
 * 제네릭 함수 호출 되었을때 T 타입 변수가 추론이 된다.
 */
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();

if (typeof num === 'number') {
  num.toFixed();
}

let bool = func(true);
let str = func('Hello');

// 명시적으로 사용하고 싶을때 예시
// 배열 튜플
let arr = func<[number, number, number]>([1, 2, 3]);
