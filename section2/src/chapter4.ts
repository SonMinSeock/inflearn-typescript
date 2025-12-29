type User = {
    id: number;
    name: string;
    nickname: string;
    birthday: string;
    bio: string;
    location: string;
};

let user1: User = {
    id: 1,
    name: "Max",
    nickname: "winter_load",
    birthday: "1998.05.12",
    bio: "Hello!",
    location: "부천시"
};

let user2: User = {
    id: 2,
    name: "손민석",
    nickname: "magic_master",
    birthday: "1998.09.01",
    bio: "Hello!",
    location: "금천구"
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

type CountryNumberCodes = {
    [key: string]: number;
    // Korea: string; // 위 값 서로 타입 일칠하지 않으면 에러 발생
};

type CountryStringOrNumberCodes = {
    [key: string]: string | number;
};


let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedStates: "us",
    UnitedKingdom: "uk",
};

let counrtyNumberCodes: CountryNumberCodes = {
    // Korea: "ko",
    Korea: 410,
    UnitedStates: 840,
    UnitedKingdom: 826,
};

let counrtyStringOrNumberCodes: CountryStringOrNumberCodes = {
    Korea: 410,
    UnitedStates: "us",
    UnitedKingdom: "uk",
};