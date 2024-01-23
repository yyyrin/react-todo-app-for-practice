import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (newCategory: Categories) => {
    setToDos((oldToDos) => {
      // 1) target 경로 찾기
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // 2) 새 category로 새로운 to do 만들기
      const newToDo = { text, id, category: newCategory };
      // 3) category update
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button
          name={Categories.DOING}
          onClick={() => onClick(Categories.DOING)}
        >
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button
          name={Categories.TO_DO}
          onClick={() => onClick(Categories.TO_DO)}
        >
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button
          name={Categories.DONE}
          onClick={() => onClick(Categories.DONE)}
        >
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
