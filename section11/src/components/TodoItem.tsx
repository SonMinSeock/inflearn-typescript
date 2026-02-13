import { Todo } from '../types';
import { useTodoDispatch } from '../hooks/useTodoDispatch';

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  // Todo 디스패치 컨텍스트
  const dispatch = useTodoDispatch();

  // 삭제 버튼 클릭 이벤트 핸들러 함수
  const onClickDeleteButton = () => {
    dispatch.deleteTodo(props.id);
  };

  return (
    <>
      <div>
        {props.id}번 : {props.content}
        <button onClick={onClickDeleteButton}>삭제</button>
      </div>
    </>
  );
}
