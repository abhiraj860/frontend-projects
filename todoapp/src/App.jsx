import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { todoList, filters } from "./store/atoms/atoms";
import { useState } from "react";
import { listFilter, stats } from "./store/selectors/selectors";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function App() {
  return (
    <div>
      <ListStat />
      <TodoItemCreator />
      <Displayer />
    </div>
  );
}
function Displayer() {
  const setList = useSetRecoilState(todoList);

  function handleOnDragEnd(result) {
    if(!result.destination) return;
    setList((oldList)=>{
      const arr = JSON.parse(JSON.stringify(oldList));
      const [reorderedItem] = arr.splice(result.source.index, 1);
      arr.splice(result.destination.index, 0, reorderedItem);
      return arr;
    });
   }
  return <div>
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <ListDisplay />
    </DragDropContext>
  </div> 
}

function ListStat() {
  const p = useRecoilValue(stats); 
  return (
    <div>
      <ul>
        <li key={1}>Total items: {p.totalNum}</li>
        <li key={2}>Items Completed: {p.completed}</li>
        <li key={3}>Items not completed: {p.uncompleted}</li>
        <li key={4}>Percent completed: {p.percentCompleted}</li>
        <li key={5}>Text not completed: {p.notCompleted}</li>
      </ul>
    </div>
  );
}


function ListDisplay() {
  
  const setTodoList = useSetRecoilState(todoList);
  const list = useRecoilValue(listFilter);

  function deleteHandler(ids) {
    setTodoList((oldList)=>{
      return oldList.filter((value)=>value.id !== ids);
    });
  }

  function toggleHandler(ids) {
    setTodoList((oldList)=>{
      const arr = JSON.parse(JSON.stringify(oldList));
      const indx = arr.findIndex(todo=>todo.id === ids);
      arr[indx].completed = !arr[indx].completed;
      return arr;
    });
  }

  function editHandler(input, ids) {
    setTodoList((oldList)=>{
      const arr = JSON.parse(JSON.stringify(oldList));
      const indx = arr.findIndex(todo=>todo.id === ids);
      arr[indx].text = input;
      return arr;
    });
    
  }



  return (
    <Droppable droppableId="todolist">
      {(provided)=>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {
            list.map((value, index)=>{
              return (
                <Draggable key={value.id} draggableId={String(value.id)} index={index}>
                  {(provided)=>(
                    <div key={value.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <input type='text' value={value.text} onChange={(e)=>editHandler(e.target.value, value.id)}/>
                    <input type='checkbox' onChange={()=>toggleHandler(value.id)} defaultChecked={value.completed===true?true:false}/>
                    <button onClick={(e)=>deleteHandler(value.id)}>X</button>
                    </div>
                  )}
                </Draggable>
              )
            })
          }
          {provided.placeholder}
        </div>
      )}
    
    </Droppable>
  );
}





function TodoItemCreator() {
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


export default App
