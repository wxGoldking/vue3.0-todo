<template>
    <div>
        <todo-item
            v-for="item of todoList"    
            :key="item.id"
            :item="item"
            @removeTodo="removeTodo"
            @setStatus="setStatus"
            @setDoing="setDoing"
        >
        </todo-item>
    </div>
</template>

<script setup lang="ts">
import { IUseTodo, IUseLocalStorage, useLocalStorage, useTodo } from '@/hooks';
import { ITodo } from '@/typings';
import { computed, defineComponent, onMounted, watch } from 'vue';
import { useStore, Store } from 'vuex';
import TodoItem from './TodoItem.vue';
    const {
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }: IUseTodo = useTodo();
    const {setLocalList}: IUseLocalStorage = useLocalStorage();

    const store: Store<any> = useStore();
    const todoList = computed<ITodo[]>(() => store.state.list);

    watch(() => store.state.list, (todoList: ITodo[]) => {
        setLocalList(todoList);
    })
    onMounted(() => {
        setTodoList();
    })
</script>

<style lang="scss" scoped>

</style>