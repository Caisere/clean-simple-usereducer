import { useReducer, useState } from 'react';
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

  // handler for count
  function handleCount (e){
    dispatch({ type: 'count', payload: Number(e.target.value) });
  }

  // handler for set
  function handleSet() {
    dispatch({ type: 'set', payload: value });
  }

  // handler for reset
  function handleReset () {
    dispatch({type: 'reset'})
  }

  return (
    <div className="App">
      {showCount && <div>{count}</div>}
      <input
        type="text"
        value={value}
        onChange={handleCount}
      />
      <div className="card">
        <button
          onClick={handleSet}
        >
          set
        </button>
        <button onClick={handleReset}>
          reset
        </button>
      </div>

      <footer>
        <a href="https://github.com/Caisere/clean-simple-usereducer.git">github repo</a>
      </footer>
    </div>
  );
}

export default App;
