import React, { Children, ReactElement, useState } from 'react';

interface Props {
  onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  // Todo 텍스트 입력 값에 대한 상태
  const [text, setText] = useState('');

  // Todo 텍스트 입력 이벤트 핸들러 함수
  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 추가 버튼에 대한 이벤트 핸들러 함수
  const onClickButton = () => {
    props.onClickAdd(text);
    setText('');
  };
  return (
    <>
      <input type="text" value={text} onChange={onChangeInputText} />
      <button onClick={onClickButton}>추가</button>
    </>
  );
}
