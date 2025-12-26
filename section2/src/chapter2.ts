// 베열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "son"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = ["hello", 1];

// 다차원 배열의 타입을 정의
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
];

// 튜플
let tup1: [number, number] = [1, 2]
// tup1 = [1, 2, 3];
// tup1 = [1, "2"];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜플 언제 쓰는지?
// const users: [string, number][] = [
//     ["손민석", 1],
//     ["아이유", 2],
//     ["유재석", 3],
//     [4, "이승철"]
// ];