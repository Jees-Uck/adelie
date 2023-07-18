<script setup>
import BrandingFooter from '../components/brandingFooter.vue'
import FooterNavMenu from '../components/footerNavMenu.vue'
</script>

<template>  
  <footer class="footer">
    <div class="vectorFooterMain"></div>
    <div class="container">
      <div class="footerMenuBox">
        <div class="bottom">
          <div class="footerLogoWrap">
            <BrandingFooter/>
            <p class="reserved">© 2023 All rights reserved</p>
          </div>
          <FooterNavMenu/>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  height: 364px;
  min-width: 100%;
}
.footerMenuBox{
  display: flex;
  position: relative;
  height: 100%;
  justify-content: center;
}
.bottom {
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;

}

.vectorFooterMain {
  background-image: url('src/assets/vectors/globalVectors/footerMainVector.svg');
  background-repeat: no-repeat;
  min-width: 1755px;
  min-height: 364px;
  z-index: 0;
  position: absolute;
  left: -468px;
  bottom: -10px;
  overflow: hidden;
}

.footerLogoWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 31px;
  text-align: center;
}

.reserved {
  color: #FFF;
  font-family: gilroyregular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
}



/*Медіазапити*/

@media (min-width: 576px) { 
}
@media (min-width: 768px) { 
  
}
@media (min-width: 992px) { 
  .bottom {
  flex-direction: row;
  gap: 159px;
}
.footerLogoWrap {
  flex-direction: row;
}
}
@media (min-width: 1200px) { 
    .bottom {
  gap: 100px;
}
}
@media (min-width: 1400px) { 
  .vectorFooterMain {
  left: -158px;
  bottom: -10px;
}
  .bottom {
  gap: 159px;
}
}
</style>
