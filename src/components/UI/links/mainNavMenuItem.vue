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

    font-family: gilroyregular;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  cursor: pointer;
}


</style>