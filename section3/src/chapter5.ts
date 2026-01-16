/**
 * 타입 추론
 *변수의 초기값 기준으로 타입을 추론 한다.
 */
let a = 10;
let b = 'hello';
let c = {
  id: 1,
  name: 'son',
  profile: {
    nickname: 'breaker',
  },
  urls: ['https://son.com'],
};
let { id, name, profile } = c;
let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
  return 'hello';
}
/**
 * 암묵적 any, 즉 초기값 없기 때문에 any로 추론할게 의미이다.
 * 암묵적 any 타입 추론하면 진화 한다.
 * 암묵적 any로 사용하는건 비추천!
 */
let d;
d = 2;
d.toFixed();

d = 'hello';
d.toUpperCase();

// cons로 선언 한 변수에 10 값을 할당하면 타입 추론은 number 타입 아니라 10 리터럴 타입으로 추론한다.
// 상수에 값을 할당하면 리터럴로 추론하는 이유는 상수이므로 값이 변경 할 일이 없기 때문이다.
const num = 10;
const str = 'hello'; // hello 라는 리터럴로 추론한다.

let arr = [1, 'hello']; // union 타입으로 추론한다.
