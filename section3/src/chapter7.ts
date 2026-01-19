/**
 * 타입 좁히기
 * 조건문을 통해서 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

/**
 * instance of 연산자
 * 클래스의 인스턴스인지 비교하는 연산자이다.
 * 예를 들어, value가 Date 클래스의 인스턴스인지
 * Person 타입은 클래스 아니기 때문에 instanceof 연산자 사용 못한다.
 * in 연산자 이용해야한다.
 */
function func(value: number | string | Date | null | Person) {
  // 타입 가드
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
