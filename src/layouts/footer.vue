<script setup>
import BrandingFooter from '../components/brandingFooter.vue'
import FooterNavMenu from '../components/footerNavMenu.vue'
</script>

<template>  
  <footer class="footer">
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

<style >
footer {
  background-image: url('src/assets/vectors/globalVectors/footerMainVector.svg');
background-repeat: no-repeat;
padding-top: 184px;
    min-width: 100%;
    height: 364px;
 background-position: -468px 10px;
}

.footerMenuBox{
  display: flex;
  height: 100%;
  justify-content: center;
}
.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;

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
  position: relative;
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
