import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice";
import { useState } from "react";
import '../counter/reduxcounter.css'

const ReduxCounter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);


    const resetAll = () => {
      dispatch(reset());
      setAmount(0);
    }

    const addValue = Number(amount) || 0;
  return (
    <section>
        <div className="increment-con">
          <h1>{count}</h1>
          <div className="buttons-con">
              <button onClick={() => dispatch(increment())}>Increment</button>
              <button onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
        </div>
        <div className="increment-by-amount-con">
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <div className="buttons-con">
              <button onClick={() => dispatch(incrementByAmount(addValue))}>Increment by amount</button>
              <button onClick={() => dispatch(decrementByAmount(addValue))}>Decrement by amount</button>
              <button onClick={() => resetAll()}>Reset</button>
          </div>
        </div>
    </section>
  )
}

export default ReduxCounter