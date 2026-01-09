/**
 * 객체 타입의 호환성
 * - 어떤 객체타입을 다른 객체 타입으로 취급헤도 되는지
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '뚜비',
  color: 'white',
  breed: '비숑',
};

animal = dog; // 업케스팅
// dog = animal; // 디은케스팅

/**
 * Animal이 Dog의 슈퍼타입이다. Dog는 Animal의 서브 타입이다.
 * 이걸 판단하는 기준이 프로퍼티 보고 판단한다.
 */

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기 잘라먹는 타입스크립트',
  price: 33000,
  skill: 'typescript',
};

book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 타입 검사 발동
let book2: Book = {
  name: '한 입 크기 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs',
};

let book3: Book = programmingBook;

function func(book: Book) {}

// 초과 프로퍼티 타입 검사 발동
func({
  name: '한 입 크기 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs',
});

func(programmingBook);
