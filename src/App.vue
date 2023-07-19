<script setup>
import Header from './layouts/header.vue'
import Footer from './layouts/footer.vue'
</script>

<template>
<div class="wrap">
  <div class="forPage">
    <div class="topManyLines"></div>
    <Header/>
    <!-- <div class="vectorFooterManyLines">
    </div> -->
    <router-view></router-view>
    <!-- <div class="vectorBottomRight"></div> -->
  </div>
  <Footer/>
</div>
</template>

<style>
#app {

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
  background: #FFF;
  margin: 0;
  height: 100%;

}
footer {
    flex-shrink: 0;

}
/*Шрифти*/
@font-face {
    font-family: 'gilroylight';/*300*/
    src: url('src/fonts/gilroy-light-webfont.woff2') format('woff2'),
         url('src/fonts/gilroy-light-webfont.woff') format('woff'),
         url('src/fonts/gilroy-light-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'gilroymedium';/*500*/
    src: url('src/fonts/gilroy-medium-webfont.woff2') format('woff2'),
         url('src/fonts/gilroy-medium-webfont.woff') format('woff'),
         url('src/fonts/gilroy-medium-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'gilroyregular'; /*400*/
    src: url('src/fonts/gilroy-regular-webfont.woff2') format('woff2'),
         url('src/fonts/gilroy-regular-webfont.woff') format('woff'),
         url('src/fonts/gilroy-regular-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}

.wrap{
    display: flex;
  flex-direction: column;
  height: 100%;
}
.forPage{
    min-height: 100%;
  position: relative;
}
h1{
font-family: gilroyregular;
 font-weight: 400;
}
h2{
font-family: gilroylight;
font-weight: 300;
 color: #000;
font-size: 35px;
font-style: normal;
line-height: 55px;
}
h3{
  font-family: gilroylight;
  font-weight: 300;

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
  max-width: 355px;
  margin: 0 auto;
  height: 100%;
}
.container:after {
  display: table;
}

/* VECTORS */
.topManyLines{
    background-image: url('src/assets/vectors/globalVectors/topManyLines.svg');
      background-size: cover;
  background-position: center;
  position: absolute;
  min-width: 199px;
  min-height: 109px;
  top: -34px;
  left: -100px;
transform: rotate(-9.87deg);
}
.vectorFooterManyLines{
  background-image: url('src/assets/vectors/globalVectors/VectorBottomRightManyLines.svg');
  background-size: cover;
  background-position: center;
  min-width: 954px;

  z-index: 0;
  position: absolute;
  bottom: -50px;
  right: -494px;
  transform: rotate(-24.387deg);
  overflow: hidden;

}
.vectorFooterManyLines::before{
  content: '';
position: absolute;
background-image: url('src/assets/vectors/globalVectors/plus.svg');
width: 8px;
height: 8px;
top: 173px;
left: 305px;


}
.vectorBottomRight{
  background-image: url('src/assets/vectors/globalVectors/VectorBottomRight.svg');
    background-size: cover;
  background-position: center;
    min-width: 331px;
  min-height: 395px;
  z-index: 0;
  position: absolute;
bottom: 79px;
right: -18px;
  overflow: hidden;
}

/*Медіазапити*/

@media (min-width: 576px) { 
.container {
  max-width: 500px;
}
.vectorFooterManyLines{
  min-width: 954px;

  bottom: -50px;
  right: -494px;
}
 }


@media (min-width: 768px) { 
.container {
  max-width: 700px;
}
 }
.vectorFooterManyLines{
  min-width: 954px;
  min-height: 666px;
  bottom: -50px;

}

@media (min-width: 992px) { 
.container {
  max-width: 860px;
}
.vectorFooterManyLines{
min-width: 1148px;
}
.vectorBottomRight{
  min-width: 636px;
  min-height: 764px;
  bottom: -81px;
  right: -28px;

}
 }


@media (min-width: 1200px) { 
.container {
  max-width: 1100px;
}
.vectorBottomRight{
  min-width: 719px;
  min-height: 864px;
  bottom: -81px;
  right: -28px;

}
 }


@media (min-width: 1400px) { 
  .container {
  max-width: 1311px;
}
.vectorFooterManyLines{
min-width: 1148px;
bottom: 0px;
    right: -296px;
}
.vectorBottomRight{
  min-width: 850px;
  min-height: 1064px;
  bottom: -81px;
  right: -28px;

}
 }







</style>
