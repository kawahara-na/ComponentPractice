<script setup lang="ts">
import { nextTick, ref, type Ref } from 'vue'

const titleModel = defineModel<string>('title')
const textModel = defineModel<string>('text')
const isTitleEdit: Ref<boolean> = ref<boolean>(false)
const isTextEdit: Ref<boolean> = ref<boolean>(false)
const inputContent: Ref<HTMLInputElement | null> = ref<HTMLInputElement | null>(null)

const onClick = async (e: Event) => {
  const target = e.target as HTMLElement
  const targetEl = target.dataset.name
  console.log(targetEl)
  if (targetEl == 'text') {
    isTextEdit.value = !isTextEdit.value
    await nextTick()
    inputContent.value?.focus()
  }
  if (targetEl == 'title') {
    isTitleEdit.value = !isTitleEdit.value
    await nextTick()
    inputContent.value?.focus()
  }
}
</script>
<template>
  <div>
    <h2>
      <input
        v-if="isTitleEdit"
        @blur="onClick"
        type="text"
        data-name="title"
        ref="inputContent"
        v-model="titleModel"
      />
      <span v-else @click="onClick" data-name="title" v-text="titleModel"></span>
    </h2>
    <div>
      ↓text↓ <br />
      <input
        v-if="isTextEdit"
        @blur="onClick"
        type="text"
        data-name="text"
        ref="inputContent"
        v-model="textModel"
      />
      <span v-else @click="onClick" data-name="text" v-text="textModel"></span>
    </div>
  </div>
</template>
