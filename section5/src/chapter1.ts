/**
 * 인터페이스 확장
 */

type Animal = {
  name: string;
  color: string;
};

// extends는 객체 타입이면 확장 가능하다!
interface Dog extends Animal {
  name: string;
  // name: number; // 에러! 해당 프로퍼티 타입이 슈퍼타입의 서브타입이어야 재정의 된다.
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dog: Dog = {
  // name: '뚜비',
  name: 'hello',
  color: 'white',
  isBark: true,
};

const dogCat: DogCat = {
  name: 'hello',
  color: '',
  isBark: true,
  isScratch: true,
};
