import { useEffect, useRef, useState } from 'react'
import { Cards } from './components/Cards'
function App() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const [textVis, setTextVis] = useState("");
  const curr = useRef(null);

  useEffect(()=>{
    curr.current.focus();
  }, []);

  function changeHandler(e) {
    setVisible(false);
    setText(()=>e.target.value);
    setTextVis(()=>e.target.value);
  }

  function clickHandler() {
    setVisible(true);
    setText('');
    curr.current.focus();
  }

  return (
    <div className='min-h-screen bg-cyan-200'>
      <div className='flex justify-center'>
        <div className='w-96 h-52 mt-10 rounded-xl bg-blue-800 bg-opacity-50 backdrop-blur-lg'>
          <div>
            <div className='font-bold text-2xl text-white font-mono text-center mt-4'>Enter your name</div>
          </div>
          <div className='flex justify-center'>
            <input maxLength={"14"} ref={curr} onChange={changeHandler} value={text} className='w-80 h-10 p-4 mt-4 rounded-lg focus:outline-none text-slate-500 font-medium' placeholder='Enter your name'/>
          </div>
          <div className='flex justify-center'>
            <button onClick={clickHandler} className='w-28 p-2 mt-7 rounded-lg text-white font-medium text-lg bg-blue-700'>Done </button>
          </div>
        </div>
      </div>
      {(visible===true) ? <Cards inp={textVis}/> : <div></div>}
    </div>
  )
}

export default App
