import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  category: "DONE" | "DOING" | "TO_DO";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});

/*
Selectors

- 파생된 state(derived state)의 일부를 나타냄
- 기존 state를 가져와서 기존 state를 이용해 새로운 state를 만들어서 반환할 수 있음
- 기존 state를 이용만할 뿐, 변형시키지 않음
- derived state는 다른 데이터에 의존하는 동적인 데이터를 만들 수 있기 때문에 강력한 개념임
*/