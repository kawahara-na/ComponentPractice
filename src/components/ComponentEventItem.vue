<script setup lang="ts">
import { ref, type Ref } from 'vue'
import EmitComponent from './utility/EmitComponent.vue'
const num: Ref<number> = ref(0)
const isUser: Ref<boolean> = ref(false)
const onClickEvent = () => {
  num.value++
}

const onSubmit = (id: string, pass: string): void => {
  isUser.value = id === 'kawa' && pass === 'hara'
}
</script>
<template>
  <div>
    <h2>コンポーネントイベント</h2>
    <EmitComponent :count="num" @some-event="onClickEvent" @submit="onSubmit" :isUser="isUser" />
  </div>
</template>
