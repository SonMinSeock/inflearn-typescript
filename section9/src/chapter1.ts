/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// 분산 작업
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;

// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string

/**
 * 실용적인 예제 1.
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1 단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계
// number |
// never |
// boolean

// 결과
// number | never | boolean
// 유니온 타입에 never 타입이 있으면 제외된다. 왜냐하면 never 타입이 공집합이기 때문이다. 예를 들어, number와 never 합치면 number

// 최종 결과
// number | boolean

/**
 * 실용적인 예제 2.
 */

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;

// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2 단계
// never |
// string |
// never

// 결과
// never | string | never
// 유니온 타입에 never 타입이 있으면 제외된다.

// 최종 결과
// string

/**
 * 분산 방지 하는 방법
 */
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;

let e: StringNumberSwitch2<boolean | number | string>;
