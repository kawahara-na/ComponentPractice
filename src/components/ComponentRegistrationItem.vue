<script setup lang="ts"></script>

<template>
  <div>
    <h2>コンポーネント</h2>
    <!-- App.vueで宣言した場合、グローバルで使用できる(インポートがないからわかりにくい) -->
    <!-- 1.グローバルインポートするとどこでどんなコンポーネントを使用しているかが分かりづらくなる -->
    <!-- 2.グローバルインポートすると使っていない時でもバンドルに含まれるためファイルが重くなる -->
    <MyGlobalButton></MyGlobalButton>
  </div>
</template>
