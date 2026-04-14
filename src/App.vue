<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Registration">Registration</RouterLink>
        <RouterLink to="/props">Props</RouterLink>
        <RouterLink to="/componentEvent">ComponentEvent</RouterLink>
        <RouterLink to="/componentDefineModel">DefineModel</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
