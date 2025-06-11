import { useCounter } from "@/hooks/useCounter";

const Counter = () => {
  const { count, reset, increment } = useCounter();

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => reset()}>リセット</button>
      <button onClick={() => increment()}>+1</button>
    </>
  );
};

export default Counter;
