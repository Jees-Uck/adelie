<template>
    <nav class="mainNavFooter">
        <ul class="navlistFooter">
        <NavMenuItem  class="navitemFooter" :navmenu="{ title: 'Home' }" />
        <NavMenuItem  class="navitemFooter" :navmenu="{ title: 'Blog' }" />
        <NavMenuItem  class="navitemFooter" :navmenu="{ title: 'Contact' }" />
        </ul>
  </nav>
</template>
<script setup>
import NavMenuItem from "../components/UI/links/mainNavMenuItem.vue";

</script>
<style scoped>
.mainNavFooter{
width: 332px;
height: 23px;  
}

.navlistFooter {
display: flex;
list-style: none;
justify-content: space-between;
align-items: center;
align-content: center;
z-index: 3;
}
.navitemFooter {
color: #FFF;

}
/*Медіазапити*/

@media (min-width: 576px) { 
}
@media (min-width: 768px) { 
  
}
@media (min-width: 992px) { 
.mainNavFooter{
width: 300px; 
}
}
@media (min-width: 1200px) { 
.mainNavFooter{
width: 260px; 
}
}
@media (min-width: 1400px) { 
.mainNavFooter{
width: 332px;  
}
}
</style>