import React from 'react';
import './App.css';
import { __interactionsRef } from 'scheduler/tracing';

function App() {
  const [ input, setInput ] = React.useState('')
  const [ decode, setDecode ] = React.useState(false)

  const cipherTable = {
    ' ': ' ',
  	'a': 'FF',
  	'b':'XA',
  	'c':'FA',
  	'd': 'XX',
  	'e': 'AG',
  	'f': 'DD',
  	'g': 'GF',
  	'h': 'GA',
  	'i': 'AX',
  	'j': 'GG',
  	'k': 'DA',
  	'l': 'AA',
  	'm': 'AF',
  	'n': 'GX',
  	'o': 'XF',
  	'p': 'XD',
  	'q': 'XG',
  	'r': 'AD',
  	's': 'FD',
  	't': 'DX',
  	'u': 'FG',
  	'v': 'DF',
  	'w': 'DG',
  	'x': 'GD',
  	'y': 'ZZ',
  	'z': 'FX',
  }

  const inverseCypherTable = {}
  
  for (const key in cipherTable) {
    inverseCypherTable[cipherTable[key]] = key
  }
    
  const output = decode ? 
    (input.toUpperCase().match(/(\s|.{1,2})/g) || []).map((char) => {
      return inverseCypherTable[char];
    }).join('') :
    input.toLowerCase().split('').map((char) => {
      return cipherTable[char];
    }).join('')
  
  return (
    <main>
      <label>
        Decode
      <input type="checkbox" checked={decode} onChange={() => setDecode(!decode)}  />
        </label>
      <br/>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      
      <br/>
      
      {output}
    </main>
  );
}

export default App;