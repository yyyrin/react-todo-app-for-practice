import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector } from "../atoms";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
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

- setError: (name: string, error: FieldError, { shouldFocus?: boolean }) => void
  - 이 함수를 사용하면 하나 이상의 오류를 수동으로 설정 가능

- shouldFocus?: boolean
  - 오류를 설정하는 동안 input에 focus을 맞춰야 함
  - input이 비활성화되면 shouldFocus가 작동하지 않음

- setValue: (name: string, value: unknown, config?: Object) => void
  - 필드 값을 업데이트
  - 등록된 필드의 값을 동적으로 설정하고 form state를 확인하고 업데이트하는 옵션 가질 수 있음
  - 동시에 불필요한 rerender를 피하려고 함
  ```
  setValue('firstname', 'hello');
  onClick={() => setValue("firstName", "Bill")}
  ```
  
- reset: (values?: Record, options?: Record) => void
  - form state와 value 재설정
  - 전체 form state 또는 form state의 일부를 재설정함
  ```
  reset() // form 전체 리셋
  reset({ email: "" }); // form에서 특정 필드만 리셋
  ```
*/
