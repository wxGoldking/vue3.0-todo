<script lang='tsx'>
import { defineComponent, ref } from "vue";
import { IUseTodo, useTodo } from '../../hooks'
 
export default defineComponent({
    name: "TodoInput",
    setup () {
        const todoValue = ref<string>('');
        const { setTodo }: IUseTodo = useTodo();

        const setTodoValue = (e: KeyboardEvent): void => {
            if (e.code !== 'Enter') return;
            if(todoValue.value.trim()) {
                // 设置数据
                setTodo(todoValue.value)
                todoValue.value = '';
            }
        }
        const inputHandler = (event: Event):void => {
            todoValue.value = (event.target as HTMLInputElement).value
        }
        return () => (
            <div>
                <input
                    type="text"
                    value={todoValue.value}
                    onInput={inputHandler}
                    onKeyup={setTodoValue}
                />
            </div>
        )
    }
})
</script>

<style lang="scss" scoped>

</style>