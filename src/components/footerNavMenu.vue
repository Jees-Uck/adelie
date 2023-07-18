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
z-index: 3;
}
.navitem {
color: #FFF;

}
/*Медіазапити*/

@media (min-width: 576px) { 
}
@media (min-width: 768px) { 
  
}
@media (min-width: 992px) { 
.mainNav{
width: 300px; 
}
}
@media (min-width: 1200px) { 
.mainNav{
width: 260px; 
}
}
@media (min-width: 1400px) { 
.mainNav{
width: 332px;  
}
}
</style>