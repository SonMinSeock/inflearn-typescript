/**
 * 클래스
 */

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심히 공부함!');
  }

  introduce() {
    console.log(`안녕하세요 저는 ${this.name}입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 부모 클래스의 생성자 호출
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함!`);
  }
}

// let studentA = new Student('Son', 'A+', 28); // Student 클래스를 이용해서 만든 객체를 Student의 인스턴스라고 부른다.

// studentA.introduce();
// studentA.study();

// let studentB = new Student('홍길동', 'B+', 27);
// studentB.introduce();
// studentB.study();

const studentDeveloper = new StudentDeveloper('Son', 'B+', 28, 'TypeScript');
console.log(StudentDeveloper);
studentDeveloper.introduce();
studentDeveloper.study();
studentDeveloper.programming();
