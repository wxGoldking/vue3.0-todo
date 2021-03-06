import { ITodo, TODO_STATUS } from "@/typings"
import { useStore, Store } from 'vuex'
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING_STATUS } from '@/store/actionTypes';

export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}

export interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;
}

function useTodo(): IUseTodo {

    const store: Store<any> = useStore();
    const {getLocalList}: IUseLocalStorage = useLocalStorage();
    const todoList: ITodo[] = getLocalList();


    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }

        store.dispatch(SET_TODO, todo);
    }

    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList);
    }
    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO, id);
    }
    function setStatus(id: number):void {
        store.dispatch(SET_STATUS, id)
    }
    function setDoing(id: number) {
        store.dispatch(SET_DOING_STATUS, id)
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}


export function useLocalStorage() {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]');
    }

    function setLocalList(todoList: ITodo[]) {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    return {
        getLocalList,
        setLocalList
    }
}

export {
    useTodo
}