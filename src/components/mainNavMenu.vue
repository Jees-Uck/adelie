<template>
    <nav class="mainNav">
        <ul class="navlist">
        <NavMenuItem  class="navitem" :navmenu="{ title: 'Home' }" />
        <NavMenuItem  class="navitem" :navmenu="{ title: 'Blog' }" />
        <NavMenuItem  class="navitem" :navmenu="{ title: 'Contact' }" />
        </ul>
  </nav>
</template>
<script setup>
import NavMenuItem from "../components/UI/links/mainNavMenuItem.vue";





</script>
<style scoped>
.mainNav{
  display: none;
  width: 355px;
  height: 23px;  
}
@media (min-width: 768px) {
.mainNav{
  width: 332px;
  height: 23px;  
}
}
.navlist {
display: flex;
list-style: none;
justify-content: space-between;
align-items: center;
align-content: center;
}
.navitem {
  z-index: 1;
}

@media (min-width: 768px) {
  .mainNav {
    display: block;
  }
}

</style>