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
