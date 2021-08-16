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

<script lang="ts">
import { IUseTodo, useTodo } from '@/hooks';
import { ITodo } from '@/typings';
import { computed, defineComponent, onMounted } from 'vue';
import { useStore, Store } from 'vuex';
import TodoItem from './TodoItem.vue';
export default defineComponent({
    name: "TodoList",
    components: {
        TodoItem
    },
    setup () {
        const {
            setTodoList,
            removeTodo,
            setStatus,
            setDoing
        }: IUseTodo = useTodo();

        const store: Store<any> = useStore();


        onMounted(() => {
            setTodoList();
        })

        return {
            todoList: computed(() => store.state.list),
            removeTodo,
            setStatus,
            setDoing
        }
    }
})
</script>

<style lang="scss" scoped>

</style>