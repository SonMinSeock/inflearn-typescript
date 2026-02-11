/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 모든 프로퍼티들을 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

/**
 * Partial 타입 직접 제작해보기
 * -> Mapped
 * -> 인덱싱
 */
type Partial<T> = {
  [key in keyof T]?: T[key];
};

// 임시 게시글
const draft: Partial<Post> = {
  title: '제목 나중에 짓자',
  content: '초안',
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

/**
 * Required 타입 직접 제작해보기
 * -> Mapped
 * -> 인덱싱
 * -> -? 이렇게 사용하면 선택적 프로퍼티이면 필수 프로퍼티로 변경해줌
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: '한입 타스 후기',
  tags: ['ts'],
  content: '후기...',
  thumbnailUrl: 'https://...',
};

/**
 * Readonly<T>
 * -> 읽기전용, 수정불가
 * -> 특정 객체 타입의 모든 프로퍼티들을 읽기 전용으로 바꿔주는 타입
 */

/**
 * Readonly 타입 직접 제작해보기
 * -> Mapped
 * -> 인덱싱
 * -> readonly
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글입니다.',
  tags: [],
  content: '',
};

// readonlyPost.title = "테스트"
