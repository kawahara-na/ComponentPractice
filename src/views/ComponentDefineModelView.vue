<script setup lang="ts">
import ComponentDefineModelItem from '@/components/ComponentDefineModelItem.vue'
import { ref, type Ref } from 'vue'
const title: Ref<string> = ref('DefineModelの使い方')
const text: Ref<string> = ref('DefineModelで渡された文字列')
</script>
<template>
  <ComponentDefineModelItem v-model:title="title" v-model:text="text"></ComponentDefineModelItem>
</template>
