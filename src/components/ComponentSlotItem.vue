<script setup lang="ts">
import NamedSlotItem from './utility/NamedSlotItem.vue'
// import SlotItem from './utility/SlotItem.vue'
</script>

<template>
  <!-- <slot>に対応するコンテンツを渡さない場合、子コンポーネント側に文字が入っていればコールバックで表示される -->
  <!-- <SlotItem>渡したスロットの文字</SlotItem> -->

  <NamedSlotItem>
    <template v-slot:header>
      <link href="/tailwind.config.js" />
    </template>
    <template #footer>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </template>
    <template #default>
      <div>
        <h2>メインコンテンツ</h2>
      </div>
    </template>
  </NamedSlotItem>
</template>
