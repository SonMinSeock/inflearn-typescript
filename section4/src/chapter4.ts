/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// is 키워드
// 만약 반환 값이 true이면 animal 매개변수가 Dog 타입으로 좁혀준다.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    console.log('animal dog');
    animal;
  } else if (isCat(animal)) {
    // 고양이
    console.log('animal cat');
    animal;
  }
}

const dog: Dog = {
  name: '뚜비',
  isBark: true,
};

warning(dog);
