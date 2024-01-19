import { selector } from "recoil";
import { filters, todoList } from "../atoms/atoms";


export const listFilter = selector({
    key: 'listFilter',
    get: ({get})=>{
        const list = get(todoList);
        const filter = get(filters);
        switch (filter) {
            case 'completed':
                return list.filter(item=>item.completed);
            case 'uncompleted':
                return list.filter(item=>!item.completed);
            default:
                return list;
        }
    }
});

export const stats = selector({
    key: 'stats',
    get: ({get})=>{
        const list = get(todoList);
        const totalNum = list.length;
        const completed = list.filter(value=>value.completed).length;
        const uncompleted = list.filter(value=>!value.completed).length;
        const percentCompleted = totalNum !== 0 ? Math.round(completed / totalNum): 0;
        const notCompleted = list.filter(value=>!value.completed).map((value, id)=><span key={id}>{value.text}&nbsp;&nbsp;</span>);
        return {
            totalNum,
            completed,
            uncompleted,
            percentCompleted,
            notCompleted
        }
    }
    
});
