import { useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';


const initialValues = {
  count: 0,
  value: "",
  showCount: false
}


function reducer(state, action) {
  switch (action.type) {
    case 'set':
      {
        console.log(state, action);
        return { ...state, count: action.payload, showCount: true, value: "" };
      }
      break;
    case 'count':
      {
        console.log(state, action);
        return { ...state, value: action.payload };
      }
      break;
    case 'reset': 
      {
        return {state}
      }
      break;
    default: {
      throw new Error('unknown action type')
    }
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const {count, value, showCount} = state;
  return (
    <div className="App">
      {showCount && <div>{count}</div>}
      <input
        type="text"
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          dispatch({ type: 'count', payload: Number(e.target.value) });
        }}
      />
      <div className="card">
        <button
          onClick={() => {
            dispatch({ type: 'set', payload: value });
          }}
        >
          set
        </button>
        <button onClick={(e) =>{
          dispatch({type: 'reset'})}
        }>
          reset
        </button>
      </div>

    </div>
  );
}

export default App;
