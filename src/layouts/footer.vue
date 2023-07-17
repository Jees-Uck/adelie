<script setup>
import BrandingFooter from '../components/brandingFooter.vue'
import FooterNavMenu from '../components/footerNavMenu.vue'
</script>

<template>  
 <footer class="footer">
    <div class="vectorFooterMain"></div>
    <div class="container">
    
      <div class="bottom">
        <div class="footerLogoWrap">
        <BrandingFooter/>
        <p class="reserved">© 2023 All rights reserved</p>
        </div>
        <FooterNavMenu/>

      </div>    
    </div>

  </footer>
</template>

<style scoped>
footer{
  position: absolute;
  bottom: 0;
  height: 364px;
  width: 100%;

}

.bottom{
    position: absolute;
    bottom: 91px;
    display: flex;
    align-items: center;
    gap: 159px;
}
.vectorFooterMain{
    background-image: url('C:\Users\User\Desktop\AdelieMain\adelie\src\assets\vectors\globalVectors\footerMainVector.svg');
  background-size: cover;
  background-position: center;
    min-width: 1755px;
    min-height: 364px;
  z-index: 0;
  position: absolute;
  left: -158px;
  bottom: -10px;

}
.footerLogoWrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}
.reserved{
    color: #FFF;
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>