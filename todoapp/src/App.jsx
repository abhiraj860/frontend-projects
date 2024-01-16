import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { counter } from './store/atoms/textState';
import React from 'react';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Counter />
        <Buttons />
      </RecoilRoot>  
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counter);

  return (
    <div>
      Count: {count}
    </div>
  );
}
function Buttons() {
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={()=>setCount(count=>count+1)}>Increment</button>
      <button onClick={()=>setCount(count=>count-1)}>Decrement</button>
    </div>
  );
}

export default App
