import { useSelector, useDispatch } from "react-redux";
// useStore 과 useSelector 차이점 알아보기
// useStore 는 저장소에 직접 액세스 할 수 있음

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const up = () => {
    dispatch({ type: "up", amount: 5 });
  };
  const toggleCounterHandler = () => {};
  // 리덕스가 관리하는 상태를 받는것.

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={up}>increase5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
