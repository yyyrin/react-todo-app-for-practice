import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

// localStorage에서 값을 가져오거나 저장하는 동작을 수행하는 함수
const syncWithLocalStorage = (key: string, defaultValue: any) => {
  // localStorage에서 해당 key에 저장된 값을 가져옴
  const storedValue = localStorage.getItem(key);

  // 저장된 값이 있는 경우
  if (storedValue) {
    try {
      // 저장된 값을 JSON 파싱하여 반환
      return JSON.parse(storedValue);
    } catch (error) {
      console.log("Error parsing localStorage:", error);
    }
  }

  // 저장된 값이 없거나 파싱 오류가 발생한 경우 기본값 반환
  return defaultValue;
};

export const categoryState = atom<Categories>({
  key: "category",
  // localStorage에서 값을 가져오거나 기본값을 설정
  default: syncWithLocalStorage("category", Categories.TO_DO),
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  // localStorage에서 값을 가져오거나 기본값을 설정
  default: syncWithLocalStorage("toDo", []),
  // effects_UNSTABLE: Recoil에서 상태 변경 시 특정 동작을 수행할 때 사용되는 부분
  effects_UNSTABLE: [
    // onSet: 상태가 변경될 때 실행되는 함수
    ({ onSet }) => {
      onSet((newValue) => {
        // 변경된 상태를 JSON 문자열로 변환하여 localStorage에 저장
        localStorage.setItem("toDo", JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});

/* Selectors

- 파생된 state(derived state)의 일부를 나타냄
- 기존 state를 가져와서 기존 state를 이용해 새로운 state를 만들어서 반환할 수 있음
- 기존 state를 이용만할 뿐, 변형시키지 않음
- derived state는 다른 데이터에 의존하는 동적인 데이터를 만들 수 있기 때문에 강력한 개념임
*/

/* Enums

- 열거형은 TypeScript가 제공하는 기능 중 하나
- enum은 열거형으로 이름이 있는 상수들의 집합 정의 가능
- 열거형을 사용하면 의도를 문서화하거나 구분되는 사례 집합을 더 쉽게 만들 수 있음
- TypeScript는 숫자와 문자열 기반 열거형을 제공

숫자 열거형 (Numeric enums)
enum Direction {
Up = 1,
Down,
Left,
Right,
}

문자열 열거형 (String enums)
enum Direction {
Up = "UP",
Down = "DOWN",
Left = "LEFT",
Right = "RIGHT",
}
*/
