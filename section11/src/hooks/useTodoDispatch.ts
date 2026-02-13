import { useContext } from 'react';
import { TodoDispatchContext } from '../App';

/**
 * useTodoDispatch 커스텀 훅
 * -> Todo 디스패치 반환해주는 훅
 */
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);

  if (!dispatch) {
    throw new Error('TodoDispatchContext에 문제가 발생했습니다.');
  }

  return dispatch;
}
