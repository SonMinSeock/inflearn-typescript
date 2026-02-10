/**
 * 인덱스드 엑세스 타입
 * 객체 예시
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo1(author: Post['author']) {
  console.log(`${author.name} - ${author.id}`);
}

/**
 * 배열 예시
 */

const post: Post = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: 'Son',
    age: 28,
  },
};

printAuthorInfo1(post.author);

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]['author']) {
  console.log(`${author.name} - ${author.id}`);
}

const postList: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: 'Son',
    age: 28,
  },
};

printAuthorInfo2(postList.author);

/**
 * 튜플 예시
 */
type Tup = [number, string, boolean];
type Tup1 = Tup[0];
type Tup2 = Tup[1];
type Tup3 = Tup[2];
// 유니온 타입
type TupNum = Tup[number];
