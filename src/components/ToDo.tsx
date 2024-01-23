import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  // 방법1) 직접 인자로 전달된 newCategory 값 활용
  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log("i want to go", newCategory);
  // };

  // 방법2) 버튼 클릭 이벤트 핸들러
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 클릭된 버튼의 name 속성을 가져옴
    const {
      currentTarget: { name },
    } = event;
  };

  return (
    <li>
      <span>{text}</span>
      {/* 방법1)
       {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )} */}

      {/* 방법2) */}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
