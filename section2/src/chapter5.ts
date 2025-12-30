// 열거형
// 여러가지 값들을 각각 이름 부야헤 얄거해 두고 사용하는 타입
// JS에 없는 타입이다.

/*
enum Role {
    ADMIN = 0, // 값을 숫자형으로 했다고 해서 숫자형 enum이라고 부른다. 
    USER = 1,
    GUEST = 2,
}
*/

// 자동으로 0 부터 할당
enum Role {
    ADMIN,
    USER,
    GUEST,
}

// 자동 할당
enum Role2 {
    ADMIN = 10,
    USER, // 자동으로 11 부터 할당
    GUEST, // 그다음 12 할당
}

// 문자열 enum
enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "손민석",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean
};

const user2 = {
    name: "아무게",
    role: Role.USER, // 1 <- 일반 유저
    language: Language.english
};

const user3 = {
    name: "홍길동",
    role: Role.GUEST // 2 <- 게스트
};

console.log(user1, user2, user3);

// enum은 특이하게 컴파일시 코드에 사라지지 않는다.