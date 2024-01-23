import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (newCategory: IToDo["category"]) => {
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
      {category !== "DOING" && (
        <button name="DOING" onClick={() => onClick("DOING")}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={() => onClick("TO_DO")}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={() => onClick("DONE")}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
