import { useEffect, useReducer, useRef, useState } from 'react';
import DrumPad from './components/DrumPad';
import { pads } from './padsData';
import { DisplayContext } from './DisplayContext';

function App() {
  const divFocus = useRef(null);

  useEffect(()=>divFocus.current.focus(),[])

  const [disp, setDisp] = useState('Play a');
  const padsData = [...pads];
  padsData.forEach(element => {
    element.trig = false;
  });

  const reducer = (data, action) => {
    const newstate = [...data];
    newstate.forEach(element => {
      if (element.letter === action.key.toUpperCase())
        element.trig = true;
      else
        element.trig = false;
    });
    return newstate;
  }

  const [state, dispatch] = useReducer(reducer, padsData);

  const getTrig = (id) => {
    let trig = false;
    state.forEach(element => {
      if (element.letter === id)
        trig = element.trig;
    })
    return trig;
  };
  const onKey = (e) => {
    dispatch(e);
  };
  return (
    <div
      onKeyDown={onKey}
      tabIndex={0}
      ref={divFocus}
      id='wrapper'

    >
      <header >
        <h1>Piano Chords</h1>
      </header>
      <div id="drum-machine">
        <div id='display'>
          <p id='display-value'>{disp} chord</p>
        </div>


        <div
          id='board'
        >
          <DisplayContext.Provider value={setDisp}>
            {pads.map((dict, idx) => (<DrumPad title={dict.title} key={idx} letter={dict.letter} audioLink={dict.audio} trig={getTrig(dict.letter)} />))}
          </DisplayContext.Provider>
        </div>

      </div>
      <footer >
        <p>Icons from </p>
        <a href='https://icons8.com'> Icons 8</a>
      </footer>
    </div>
  );
}

export default App;
