import { useEffect, useRef, useReducer, createContext } from 'react';
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

// Todo 상태 컨텍스트
export const TodoStateContext = createContext<Todo[]>([]);

// Todo 상태 디스패치 컨텍스트
export const TodoDispatchContext = createContext<{
  addTodo: (text: string) => void;
  deleteTodo: (targetId: number) => void;
} | null>(null);

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
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={{
            addTodo,
            deleteTodo,
          }}
        >
          <Editor />
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
