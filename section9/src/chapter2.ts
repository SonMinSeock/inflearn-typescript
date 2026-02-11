/**
 * Infer (추론)
 * inference 약어로 추론하다 뜻이다.
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
