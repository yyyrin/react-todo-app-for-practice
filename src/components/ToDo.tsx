import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (newCategory: Categories) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: newCategory };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const onDelete = () => {
    setToDos((oldToDos) => {
      const newToDos = oldToDos.filter((toDo) => toDo.id !== id);
      return newToDos;
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
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ToDo;
