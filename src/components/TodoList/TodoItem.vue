<template>
  <div>
    <input
        type="checkbox" 
        :checked="item.status === statusState.FINISHED"
        @click="setStatus(item.id)"
    />
    <span :class="{'line-through': item.status === statusState.FINISHED}">
        {{item.content}}
    </span>
    <button
        @click="removeTodo(item.id)"
    >
        删除
    </button>
    <button
        v-if="item.status !== statusState.FINISHED"
        :class="{
            willdo: item.status === statusState.WILLDO,
        }"
        @click="() => item.status !== statusState.DOING && setDoing(item.id)"
    >
        {{item.status === statusState.DOING ? '正在做。。。' : '马上做'}}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { PropType, defineProps, defineEmits } from "vue";
import { ITodo, TODO_STATUS } from '@/typings';
    // interface IStatusState {
    //     DOING: TODO_STATUS;
    //     FINISHED: TODO_STATUS;
    //     WILLDO: TODO_STATUS;
    // }
    const {item = {}} = defineProps({
        item: Object as PropType<ITodo>
    })
    const emit = defineEmits(['removeTodo', 'setStatus', 'setDoing'])
    const statusState = {
        DOING: TODO_STATUS.DOING,
        FINISHED: TODO_STATUS.FINISHED,
        WILLDO: TODO_STATUS.WILLDO,
    }
    const removeTodo = (id: number): void => {
        emit('removeTodo', id);
    }
    const setStatus = (id: number): void => {
        emit('setStatus', id);
    }
    const setDoing = (id: number): void => {
        emit('setDoing', id);
    }

</script>

<style scoped>
.line-through {
    text-decoration: line-through;
}
.willdo {
    background: orange;
    color: white
}
</style>
