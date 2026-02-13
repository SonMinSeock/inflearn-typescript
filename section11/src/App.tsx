import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';

/**
 * ToDo 인터페이스
 * -> id
 * -> content
 */

interface Todo {
  id: number;
  content: string;
}

function App() {
  // Todo 리스트 상태
  const [todos, setTodos] = useState<Todo[]>([]);

  // Todo의 id 프로퍼티에 대한 Ref 데이터
  const idRef = useRef(todos.length);

  // Todo 리스트에 Todo를 추가해주는 함수
  const onClickAdd = (text: string) => {
    const newTodo: Todo = {
      id: idRef.current++,
      content: text,
    };

    setTodos([newTodo, ...todos]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
    </div>
  );
}

export default App;
