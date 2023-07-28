<template>
  <div class="burger-menu">
    <button class="burger-icon" :class="{ 'active': isOpen }" @click="toggleMenu">
        <img src="./../../assets/vectors/burger.svg" alt="Menu">
    </button>
    <ul class="menu-items" v-if="isOpen">
      <li><a href="#">Home</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.burger-menu {
  display: block;
  position: relative;
  width: 40px;
  height: 22px;
  cursor: pointer;
}

.burger-icon {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.menu-items {
    position: absolute;
    z-index: 555;
    min-width: 314px;
    height: 100%;
    display: flex;
    right: 0;
    justify-content: space-between;
    border: 1px solid;
    align-items: center;
    padding: 5px;
}

.menu-items li {
 list-style: none;

}
.menu-items a {
    font-family: gilroyregular;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  cursor: pointer;
  text-decoration: none;
  color: #000;
}

.menu-items a:hover {
  color: #555;
}

@media (min-width: 768px) {
  .burger-menu {
    display: none;
  }
}

.menu-items.show {
  opacity: 1;
  pointer-events: auto;
}
</style>
