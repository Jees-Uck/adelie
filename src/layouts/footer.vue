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
  .footerMenuBox{
  justify-content: flex-start;
}
  .bottom {
  flex-direction: row;
  gap: 159px;
}
.footerLogoWrap {
  flex-direction: row;
}
}
@media (min-width: 1200px) { 
    footer {
 background-position: -158px 10px;
}
    .bottom {
  gap: 100px;
}
}
@media (min-width: 1400px) { 
  footer {
 background-position: -158px 10px;
}
  .bottom {
  gap: 159px;
}
}
@media (min-width: 1920px) { 
  footer{
    position: relative;
  }
  .footerLogoWrap{
position: absolute;
    bottom: 91px;
    left: 322px;
}
.mainNavFooter{
    width: 332px;
    position: absolute;
    width: 332px;
    display: flex;
    width: 332px;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
    left: 863px;
    bottom: 90px;
}
.navlistFooter {
    width: 100%;
}
}
</style>
