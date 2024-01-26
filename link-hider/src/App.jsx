import { useState } from 'react'
import isUrl from 'is-url'

function App() {
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [dispText, setDispText] = useState('');
  const [visible, setVisible] = useState(false);

  function textHandler(e) {
    setText(v=>e.target.value);
  }

  function linkHandler(e) {
    setLink(v=>e.target.value);
  }

  function clickHandler() {
    if(!isUrl(link)) {
        setVisible(()=>false); 
        return;
    }
    setDispText(()=>text);
    setVisible(()=>true);
    return;
  }

  return (
    <div>
      <input onChange={textHandler} type="text" value={text} placeholder='Enter text'/> <br></br>
      <input onChange={linkHandler} type='text' value={link} placeholder='Enter link'/> <br></br>
      <button onClick={clickHandler}>Generate</button><br></br><br></br>
      {visible ? <a href={link} target='_blank'>{dispText}</a> : <span style={{color:'red'}}>Link is invalid</span>}
    </div>
  )
}

export default App
