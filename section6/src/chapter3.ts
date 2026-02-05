/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  // 주의사항
  // 인터페이스 public 필드만 정의 가능
  name: string;
  moveSpeed: number;
  // 호출 시그니처
  move(): void;
}

// implements -> 구현하다
// Character 클래스를 CharacterInterface를 구현하다
class Character implements CharacterInterface {
  // 생성자
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string,
  ) {}

  // 메서드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
