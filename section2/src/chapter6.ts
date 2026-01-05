// 1. any 타입
// 특정 변수 타입 모르때 사용한다. (치트키)
// let anyVar: any = 10;
// anyVar = 'hello';
// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

// let num: number = 10;
// num = anyVar;

// 2. unknown 타입
let unknownVar: unknown = 10;
let num: number = 0;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // Type 'unknown' is not assignable to type 'number'.ts(2322) 에러 발생

// 아래 과정 같은 거를 타입 좁히기를 타입 정제라고 한다.
if (typeof unknownVar === 'number') {
  num = unknownVar;
}

// 타입이 확실 하지 않을때 any 보단 unknown 타입 정의하는게 좋다.
