import React from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import {useState} from 'react';
import startText from './components/startText.js'; 

function App() {
  const [state, setState] = useState(startText);
  return (
    <div className="container pb-4 pt-2">
      <h1 className="text-center my-1 pb-2">React Markdown Previewer</h1>
      <form className="row" action="">
        <Editor setState={setState} state={state}/>
        <Preview state={state} />
      </form>
    </div>
  );
}

export default App;
