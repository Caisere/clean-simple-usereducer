import { useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';




function App() {
  // const [count, setCount] = useState(0)
  // const [value, setValue] = useState(0)

  const [state, dispatch] = useReducer(reducer, { count: 0, value: 0 });

  function reducer(state, action) {
    switch (action.type) {
      case 'set':
        {
          console.log(state, action);
          return { ...state, count: action.payload };
        }
        break;
      case 'count':
        {
          console.log(state, action);
          return { ...state, value: action.payload };
        }
        break;
      default: {
        return state;
      }
    }
  }

  return (
    <div className="App">
      <div>{state.count}</div>
      <input
        type="number"
        value={state.value}
        onChange={(e) => {
          console.log(e.target.value);
          dispatch({ type: 'count', payload: e.target.value });
        }}
      />
      <div className="card">
        <button
          onClick={() => {
            dispatch({ type: 'set', payload: state.value });
          }}
        >
          set
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
