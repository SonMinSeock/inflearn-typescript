/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅
// b = a; // 다운캐스팅, 에러 발생

// 기준2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 갯수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 매개변수 보면 업캐스팅 인데 에러 발생한다. 이때는 업캐스팅 에러 발생함
d = c; // 다운캐스팅

// 매개변수 객체일때
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 업캐스팅, 에러 발생
dogFunc = animalFunc; // 다운캐스팅

// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);
// };

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 갯수가 다를때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

// 매개변수 갯수로 판단
func1 = func2;
func2 = func1; // 에러 발생
