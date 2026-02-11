/**
 * 1. 조건부 타입
 * JS의 삼항 연산자 비슷하다.
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 2. 조건부 타입 활용
 * 제네릭 같이 사용할때 많이 사용한다.
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// 오버로드 시그니처
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', ''); // replaceAll 메서서드는 첫 번째 인자에 해당 문자열 찾아 있으면 다른 문자로 변경 가능하다. 빈 공백이 있으면 공백 지우는 용도로 활용 가능하다.
  } else {
    return undefined;
  }
}

let result = removeSpaces('hi im winterlood');
result.toUpperCase();

let result2 = removeSpaces(undefined);
