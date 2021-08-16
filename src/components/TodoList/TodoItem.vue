<template>
  <div>
    <input
        type="checkbox" 
        :checked="item.status === FINISHED"
        @click="setStatus(item.id)"
    />
    <span :class="{'line-through': item.status === FINISHED}">
        {{item.content}}
    </span>
    <button
        @click="removeTodo(item.id)"
    >
        删除
    </button>
    <button
        v-if="item.status !== FINISHED"
        :class="{
            willdo: item.status === WILLDO,
        }"
        @click="() => item.status !== DOING && setDoing(item.id)"
    >
        {{item.status === DOING ? '正在做。。。' : '马上做'}}
    </button>
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, defineComponent, getCurrentInstance, PropType, SetupContext } from "vue";
import { ITodo, TODO_STATUS } from '@/typings';

interface IStatusState {
    DOING: TODO_STATUS;
    FINISHED: TODO_STATUS;
    WILLDO: TODO_STATUS;
}

export default {
  name: "TodoItem",
  props: {
    item: Object as PropType<ITodo>
  },
  setup(props: any, {emit}: SetupContext<Record<string, any>>) {
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
    return {
        ...statusState,
        removeTodo,
        setStatus,
        setDoing
    };
  },
};
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
