import {useState, useRef} from 'react';

export default function Player() {
  const input = useRef();
  const [playerName, setPlayerName] = useState('');

  const handleClick = () => {
    // setSubmit(true);
    setPlayerName(input.current.value);
    input.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown'}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// state 와 Ref 의 차이점 알아보기
// 상태 : 상태값들은 컴포넌트 함수를 재실행함 상태는 UI에 바로 반영되어야 하는 값들이 있을때만 사용
// 참조 :시스템 내부에 보이지 않는 쪽, UI에 직접적인 영향을 끼치지 않는 것들에 사용
