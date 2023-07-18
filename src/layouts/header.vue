<script setup>
import BrandingHeader from '../components/brandingHeader.vue'
import mainNavMenu from '../components/mainNavMenu.vue'
import headerSearchButton from '../components/UI/headerSearchButton.vue'
import BurgerMenu from '../components/UI/burgerMenu.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="top">
        <BrandingHeader/>
        <div class="navWrap">
          <mainNavMenu/>
          <headerSearchButton/> 
          <BurgerMenu/>
        </div>
         
      </div>
      
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  z-index: 1;
}

.top {
  position: relative;
  height: 41px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navWrap {
  display: flex;
  gap: 22px;
  align-items: center;
}
</style>
