import { useCounter } from "../../hooks/useCounter"

const CounterWithHook = () => {

    const {counter, incremetar, decrementar, reset} = useCounter(10);
  return (
      <>
          <h1>Counter with hook:{counter}</h1>
          <button className="btn btn-primary" onClick={() => incremetar(2)}> +
              2
          </button>
          <button className="btn btn-primary" onClick={() => reset()}> +
              reset
          </button>
          <button className="btn btn-primary" onClick={() => decrementar(3)}> -
              3
          </button>
      </>
  );
}

export default CounterWithHook