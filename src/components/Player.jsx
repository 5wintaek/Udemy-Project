import {useState, useRef} from 'react';

export default function Player() {
  const input = useRef();
  const [playerName, setPlayerName] = useState('');

  const handleClick = () => {
    // setSubmit(true);
    setPlayerName(input.current.value);
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
