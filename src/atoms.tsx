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

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
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