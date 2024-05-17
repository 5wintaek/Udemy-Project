import { useSelector } from "react-redux";
// useStore 과 useSelector 차이점 알아보기
// useStore 는 저장소에 직접 액세스 할 수 있음

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};
  // 리덕스가 관리하는 상태를 받는것.

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
