import {useState} from 'react';

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    setSubmit(false); // 입력창에 타이핑을 치자마자 false값으로 두기 위해서 사용
    setPlayerName(e.target.value);
    console.log(playerName);
  };

  const handleClick = () => {
    setSubmit(true);
  };

  return (
    <section id="player">
      <h2>Welcome {submit ? playerName : 'unknown'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
