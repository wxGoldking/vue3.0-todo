<template>
    <div>
        <input
            type="text"
            v-model="todoValue"
            @keyup.enter="setTodoValue"
        >
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { IUseTodo, useTodo } from '../../hooks'
 
export default defineComponent({
    name: "TodoInput",
    setup () {
        const todoValue = ref<string>('');
        const { setTodo }: IUseTodo = useTodo();

        const setTodoValue = (e: KeyboardEvent): void => {
            if(todoValue.value.trim()) {
                // 设置数据
                setTodo(todoValue.value)
                todoValue.value = '';
            }
        }
        return {
            todoValue,
            setTodoValue
        }
    }
})
</script>

<style lang="scss" scoped>

</style>