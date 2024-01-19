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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordConfirmation: string;
}

const ToDoList = () => {
  // useForm 훅을 사용하여 폼 상태 관리
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  // form이 유효할 때 호출하는 콜백 함수
  const onValid = (data: any) => {
    console.log("data", data);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        // handleSubmit: onValid를 호출하기 전에 입력값을 유효성 검사함
        onSubmit={handleSubmit(onValid)}
      >
        {/* 
        필수 입력 필드에 대한 유효성 검사 및 기타 표준 HTML 유효성 규칙을 포함함
        각 field는 registration process에서 key로 사용될 "이름"을 가져야 함
        */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "write here" })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", { required: "write here", minLength: 10 })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("passwordConfirmation", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short." },
          })}
          placeholder="Password Confirmation"
        />
        <span>{errors?.passwordConfirmation?.message}</span>
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

- handleSubmit: ((data: Object, e?: Event) => void, (errors: Object, e?: Event) => void) => Function
  - form 유효성 검사가 성공하면 form 데이터를 받음

- defaultValues: Record<string, any> = {}
  - input에 대한 defaultValues는 사용자가 component와 상호 작용하기 전에 component가 처음 렌더링될 때 초기 값으로 사용됨
  - 모든 input에 대한 defaultValues를 빈 문자열이나 null과 같은 정의되지 않은 값으로 설정하는 것이 좋음
*/
