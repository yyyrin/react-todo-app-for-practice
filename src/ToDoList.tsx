import { useForm } from "react-hook-form";

// const ToDoList = () => {
//   const [toDo, settoDo] = useState("");
//   const [toDoError, setToDoError] = useState("");

//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     settoDo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // validation
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log("submit");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input value={toDo} onChange={onChange} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// };

const ToDoList = () => {
  const { register, watch } = useForm();
  // console.log(watch());

  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input
          {...register("passwordConfirmation")}
          placeholder="Password Confirmation"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;

/*
React Hook Form
- 사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장 가능한 form

```
const {
register,
handleSubmit,
formState: { errors },
} = useForm();

input {...register('lastName', { required: true })}
```

- register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
  - input을 등록하거나 element를 선택하고 유효성 검사 규칙을 React Hook Form에 적용 가능
  - 유효성 검사 규칙은 모두 HTML 표준을 기반으로 하며 사용자 지정 유효성 검사 방법도 허용

- watch: (names?: string | string[] | (data, options) => void) => unknown
  - input의 변화 구독
  - 지정된 input을 감시하고 해당 값을 반환
  - input 값을 렌더링하고 조건에 따라 무엇을 렌더링할지 결정하는 데 유용
*/
