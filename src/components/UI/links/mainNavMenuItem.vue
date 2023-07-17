<template>
  <li>
    <a class="nav-link">
      {{ navmenu.title }}
    </a>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  navmenu: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
a {
  cursor: pointer;
}


</style>