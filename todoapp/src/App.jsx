import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todoList } from "./store/atoms/atoms";
import { useState } from "react";


function App() {
  return (
    <div>
        <RecoilRoot>
          <TodoItemCreator />
          <TodoItem />
        </RecoilRoot>
    </div>
  );
}

function TodoItem() {
  const list = useRecoilValue(todoList);
  console.log(list);
  return (
    <div>
      {list.map((value, id)=><div key={id}>{value.text}</div>)}
    </div>
  );
}




function TodoItemCreator() {
  const [input, setInput] = useState('');
  const setTodoList = useSetRecoilState(todoList);
  function onChange(event) {
    setInput(event.target.value);
  }
  function addItem() {
    if(input.length === 0) {
      alert('Enter text');
      return;
    }
    const newtodo = {
      id: getID(),
      text: input,
      completed: false
    };
    setTodoList((oldList)=>[...oldList, newtodo]);
    setInput('');
  }
  return (
    <div>
      <input type='text' value={input} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getID() {
  return id += 1;
}


export default App
