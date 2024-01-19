import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { todoList, filters } from "../store/atoms/atoms";


export function TodoItemCreator() {
    const [input, setInput] = useState('');
    const setTodoList = useSetRecoilState(todoList);
    const [filter, setFilter] = useRecoilState(filters);
    
    
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
        <button onClick={addItem}>Add</button>&nbsp;&nbsp;
        Filter: &nbsp;&nbsp;
        <select defaultValue={filter} onChange={(e)=>setFilter(e.target.value)}>
          <option value='showAll'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    );
  }
  
  let id = 0;
  function getID() {
    return id += 1;
  }
  