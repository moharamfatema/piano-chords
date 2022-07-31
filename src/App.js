import DrumPad from './components/DrumPad';
import { pads } from './padsData';

function App() {

  return (
    <div >
      <header>
        <h1>Piano Chords</h1>
      </header>
      <div id="drum-machine">
        <div  id='display'></div>


        <div
          id='board'
          style = {{
            display: 'flex',
            justifyContent: 'center',
            minHeight: 200,

          }}
        >
          {pads.map((dict,idx)=>(<DrumPad title={dict.title} key={idx} letter={dict.letter} audioLink={dict.audio}/>))}

        </div>

      </div>

    </div>
  );
}

export default App;
