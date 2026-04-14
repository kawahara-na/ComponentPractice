<script setup lang="ts">
// emitとpropsで関数を渡す際の違い
// emitで使用した関数の戻り値は必ずundefinedになる
import { ref, type Ref } from 'vue'

const { count = 0, isUser = false } = defineProps({
  count: Number,
  isUser: Boolean,
})

const id: Ref<string> = ref<string>('')
const pass: Ref<string> = ref<string>('')

const event = defineEmits({
  someEvent: null,
  submit: (id: string, pass: string) => {
    if (id && pass) {
      return true
    } else {
      return false
    }
  },
})

const formSubmit = () => {
  event('submit', id.value, pass.value)
}
</script>
<template>
  <div>
    {{ count }}回クリック
    <button @click="$emit('someEvent')">Click Me</button>
    <form @submit.prevent="formSubmit">
      <label for="id">IDを入力してください</label>
      <input type="text" id="id" placeholder="idを入力" v-model="id" /><br />
      <label for="pass">PASSを入力してください</label>
      <input type="password" id="pass" v-model="pass" /><br />
      <input type="submit" value="送信" /><br />
      結果：{{ isUser ? 'OK' : 'NG' }}
    </form>
  </div>
</template>
