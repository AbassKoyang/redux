import { useReducer } from "react";

const Counter = () => {
    const ACTIONS = {
        INCREMENT: 'increment',
        DECREMENT: 'decrement'
      }
      const reducer = (state, action) => {
        switch(action.type){
          case ACTIONS.INCREMENT: return {count: state.count +1}
          case ACTIONS.DECREMENT: return {count: state.count -1}
        }
      }
      const [state, dispatch] = useReducer(reducer, {count: 1});
      return (
        <div>
          <h2>Count: {state.count}</h2>
          <button onClick={()=>dispatch({type:ACTIONS.INCREMENT})}>Increment</button>
          <button onClick={()=>dispatch({type:ACTIONS.DECREMENT})}>Decrement</button>
        </div>
      )
}

export default Counter