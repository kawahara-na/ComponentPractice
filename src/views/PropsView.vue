<script setup lang="ts">
import PropsItem from '@/components/utility/PropsItem.vue'
import { ref, type Ref } from 'vue'

interface prop {
  foo: string
  title: string
  number: Number
  text?: String
}

const temp: Ref<prop> = ref<prop>({
  foo: 'Foo',
  title: 'propsの操作',
  number: 100,
  text: '文字を送信',
})

const deleteText = () => {
  temp.value.text = undefined
}
</script>

<template>
  <div>
    <label for="text">テキストを入力(任意)</label>
    <input type="text" id="text" v-model="temp.text" />
    <input type="button" @click="deleteText" value="テキストを削除" />
  </div>

  <PropsItem :foo="temp.foo" :title="temp.title" :number="temp.number" :text="temp.text" />
</template>
