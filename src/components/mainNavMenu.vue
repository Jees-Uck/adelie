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
width: 332px;
height: 23px;  
}

.navlist {
display: flex;
list-style: none;
justify-content: space-between;
align-items: center;
align-content: center;
}
.navitem {
color: #000;
font-family: Gilroy;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
  cursor: pointer;
  z-index: 1;
}

</style>