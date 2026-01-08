/**
 * Unknown 타입
 */

function unknownExam() {
  // 업케스팅
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //   let num:number = unknownVar; // 다운케스팅
  //   let str:string = unknownVar;
  //   let bool:boolean = unknownVar;
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1:never = 10;
  //   let never2:never = "hello";
  //   let never3:never = false;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log('Hi');
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 다운케스팅 이여도 가능
  undefinedVar = anyVar;
  // neverVar = anyVar; // 다운케스팅 이건 안됨
}
