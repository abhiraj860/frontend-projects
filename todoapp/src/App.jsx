import { RecoilRoot, useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { todoList } from "./store/atoms/atoms";
import { useState } from "react";


function App() {
  return (
    <div>
      <RecoilRoot>
          <CurrentList />
          <TodoItemCreator />
          <ListDisplay />
      </RecoilRoot>
    </div>
  );
}

function CurrentList() {
  const list = useRecoilValue(todoList);
  // Do using selector
  const completed = list.filter((value)=>value.completed === true);
  return <div>
    Task not completed:
    {completed.map((value)=><span key={value.id}>{value.text}&nbsp;</span>)}
  </div>
}

function ListDisplay() {
  const [list, setTodoList] = useRecoilState(todoList);

  function deleteHandler(ids) {
    setTodoList((oldList)=>{
      return oldList.filter((value)=>value.id !== ids);
    });
  }
  return (
    <div>
      {
        list.map((value)=>{
          return (
            <div key={value.id}>
              <input type='text' value={value.text} />
              <input type='checkbox' onChange={toggleHandler} defaultChecked={value.completed===true?true:false}/>
              <button onClick={()=>deleteHandler(value.id)}>X</button>
            </div>
          )
        })
      }
    </div>
  );
}


function TodoItem() {
  const list = useRecoilValue(todoList);
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
