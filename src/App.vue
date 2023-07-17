<script setup>
import Header from './layouts/header.vue'
import Footer from './layouts/footer.vue'
</script>

<template>
<div class="wrap">
  <Header/>
  <div class="vectorFooterManyLines"></div>
</div>
  <Footer/>

</template>

<style>
#app {
  font-family: Lato, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  line-height: 1.8em;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
    height: 100%;

  background: #FFF;
  font-family: Lato, Arial, sans-serif;
  margin: 0;
  overflow: hidden;
}
.wrap{
  min-height: 100%;
}
h1, h2, h3, h4 {
  font-family: Oswald-Bold, sans-serif;
}
img {
  max-width: 100%;
  height: auto;
}
ul{
    margin: 0;
    padding: 0;
}
button{
  cursor: pointer;
}
.container {
  width: 100%;
  display: block;
  max-width: 1277px;
  margin: 0 auto;
  padding: 0 15px;
  height: 100%;
}
.container:after {
  display: table;
}

/* VECTORS */
.mainVectorBottomRight{
  z-index: 0;
  position: absolute;
  bottom: -81px;
  right: -28px;
}
.mainVectorBottomRightManyLines{
 
  position: absolute;
  bottom: -50px;
  right: -270px;

transform: rotate(-24.387deg);
   z-index: 0;
}

.vectorFooterManyLines{
  background-image: url('C:\Users\User\Desktop\AdelieMain\adelie\src\assets\vectors\globalVectors\VectorBottomRightManyLines.svg');
  background-size: cover;
  background-position: center;
  width: 1148px;
  height: 801px;
      z-index: 0;
  position: absolute;
  bottom: -50px;
  right: -270px;
transform: rotate(-24.387deg);
}

</style>
