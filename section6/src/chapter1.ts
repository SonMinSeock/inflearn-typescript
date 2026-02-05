/**
 * 타입스크립트 클래스
 */

// const employee = {
//   name: 'Son',
//   age: 28,
//   position: 'developer',
//   work() {
//     console.log('일함');
//   },
// };

/**
 * TypeScript에서 클래스를 타입으로 볼수있다.
 */
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일함');
  }
}

// 임원
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeA = new Employee('Son', 28, 'developer');
const employeeB: Employee = {
  name: '',
  age: 0,
  position: '',
  work() {},
};
