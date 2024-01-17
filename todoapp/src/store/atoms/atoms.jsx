import { atom } from "recoil";

export const todoList = atom({
    key: 'todoList',
    default: []
});

export const filters = atom({
    key: 'filters',
    default: 'showAll'
});

