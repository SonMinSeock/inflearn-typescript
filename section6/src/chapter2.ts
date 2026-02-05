/**
 * 접근 제어자
 * access modifier
 * 1. public
 * 2. private -> 내부 클래스만 접근 가능, 파생 클래스에선 접근 안됨, 외부에선 접근 안됨
 * 3. protected -> 내부 클래스 접근 가능, 파생 클래스에선 접근도 가능하다, 파생 클래스 혹은 부모 클래스 아닌 외부에선 접근 안됨
 */

class Employee {
  // 필드
  // 접근 제어자 기본적으로 public
  //   private name: string;
  //   protected age: number;
  //   public position: string;

  // 생성자
  // 생성자 인자에 접근 제어자 사용하면 알아서 필드를 만들어주고 할당도 해준다.
  constructor(
    private name: string,
    protected age: number,
    public position: string,
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
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

  // 메서드
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee('Son', 28, 'developer');
// employee.name = '홍길동';
// employee.age = 26;
employee.position = '디자이너';

console.log(employee);
