// 1. void 타입
// void -> 공허 -> 아무것도 없다.
// void는 아무것도 없다는 의미.

function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('Hello');
}

// 왜? undefined이나 null 하면 되는 굳이 void 해야할까?
function func3(): undefined {
  console.log('Hello');

  return undefined;
}

function func4(): null {
  console.log('Hello');

  return null;
}

// undefined만 넣을수 있다.
// 예외로 엄격한 null 검사 모드 끄면 null 넣을 수 있음.
let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;
// a = null; // strictNullChecks -> true로 끄면 넣을수 있음

// 2. never 타입
// never -> 존재하지 않는 타입
// 불가능한 타입

// never 타입은 이래 코드처럼 절대로 정상적으로 종료 될수 없어서 반환 값이 있는것이 모순이라고 하면 never 타입으로 한다.
function func5(): never {
  while (true) {}
}

function func6(): never {
  throw new Error();
}

let b: never;
let anyVar: any;
// b = 1; // 에러 발생
// b = undefined // 에러 발생
// b = null // 에러 발생, null 체크 끄고 값 넣을려고 했는데 에러 나옴, strictNullChecks -> true
// b = anyVar; // 에러 발생
