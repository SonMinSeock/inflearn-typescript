/**
 * 함수 타입 정의
 */

// 함수를 타입스크립트로 정의 할땐 동료에게 함수를 설명해 주는 걸로 생각하면 이해하기 쉽다.
// 타입스크립트로 함수를 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 설명
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수 타입 정의
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 * 필수 매개변수 무조건 선택적 매개변수 앞에 정의해야한다.
 */

function introduction(name = 'Son', age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === 'number') {
    console.log(`tall: ${tall + 10}`);
  }
}

introduction('Son', 27, 175);
introduction('Son', 27);

/**
 * 나머지 매개변수
 */
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
