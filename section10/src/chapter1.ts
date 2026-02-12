/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티를 딱 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

/**
 * Pick 타입 직접 제작해보기
 * -> Mapped
 * -> 인덱싱
 * -> extends 이용하여 K 타입이 T타입의 key의 유니온타입 온다고 알려줘야 한다.
 */

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// 옛날 게시글
const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 콘텐츠',
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

/**
 * Omit 타입 직접 제작해보기
 * -> Pick 유틸리티
 * -> keyof
 * -> extends
 * -> Exclude 유틸리티
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// 해석
// T = Post, K = 'title'
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailUrl', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailUrl'>

// 제목이 없는 게시글
const nonTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailUrl: '',
};

/**
 * Record<K, V>
 * 객체 타입정의 유용
 * 실무에 많이 사용한다고 한다.
 */

/**
 * Record 타입 직접 제작해보기
 * -> Pick 유틸리티
 * -> keyof
 * -> extends
 * -> Exclude 유틸리티
 */

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// 디바이스 화면별로 썸네일 크기 다르게 보여주도록 하고자한다.
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string }>;
