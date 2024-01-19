import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { filters, todoList } from '../store/atoms/atoms';
import { listFilter } from '../store/selectors/selectors';

export function Displayer() {
    const setList = useSetRecoilState(todoList);
    function handleOnDragEnd(result) {
      if(!result.destination) return;
      setList((oldList)=>{
        const arr = JSON.parse(JSON.stringify(oldList));
        const [reorderedItem] = arr.splice(result.source.index, 1);
        console
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
  