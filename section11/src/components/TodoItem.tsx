import React from 'react';
import { Todo } from '../types';

interface Props extends Todo {
  deleteTodo: (targetId: number) => void;
}

export default function TodoItem(props: Props) {
  // 삭제 버튼 클릭 이벤트 핸들러 함수
  const onClickDeleteButton = () => {
    props.deleteTodo(props.id);
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
