import { useEffect, useRef, useReducer } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

// 리듀서의 action 타입 정의
// action 객체 타입 정의를 서로소 유니온 타입으로 정의한다.
type Action =
  | {
      type: 'CREATE';
      data: Todo;
    }
  | {
      type: 'DELETE';
      targetId: number;
    };

// Todo 리듀서
function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.data];
    }
    case 'DELETE': {
      return state.filter((todo) => todo.id !== action.targetId);
    }
    default: {
      return state;
    }
  }
}

function App() {
  // Todo 리스트 상태
  const [todos, dispatch] = useReducer(reducer, []);

  // Todo의 id 프로퍼티에 대한 Ref 데이터
  const idRef = useRef(todos.length);

  // Todo 리스트에 Todo를 추가 해주는 함수
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: idRef.current++,
      content: text,
    };

    dispatch({
      type: 'CREATE',
      data: newTodo,
    });
  };

  // 해당 Todo를 삭제 해주는 함수
  const deleteTodo = (targetId: number) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
