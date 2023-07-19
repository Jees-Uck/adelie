<script setup>

</script>
 <template>

        <div class="container">
            <div class="homeMainTitle">
                <h1 class="flexForh1">
                    <span dividerH1>              
                        <span class="h1Adelie">
                            Adelie
                        </span>
                        <span class="h1Commerce">
                            E-commerce
                        </span>
                    </span>                 
                    <span>
                    Solutions
                    </span>
                </h1>
                <h3>
                    Empower Your Online Business with Expert E-commerce Solutions
                </h3>
            </div>
            <div class="homeFirstBanner">
                <div class="homeFirstBannerH2Box">
                    <h2 class="h2Relative">
                        Unlock the Power of <span class="Optimal">Optimal</span> <span class="Solution">Solutions</span> for Your Business with Us!
                    </h2>
                </div>

                <p class="firstBannerText">
                    We specialize in delivering top-notch e-commerce development solutions tailored to meet your unique business needs. With our extensive experience and deep understanding of the ever-evolving online marketplace, we are committed to helping you achieve unprecedented success.
                </p>
            <div class="homeFirstBannerImageBox">
                <img src="" alt="">
            </div>
        </div>
        </div>
        

 </template>

 <style scoped>

 .homeMainTitle{
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 22px;
 }
 .flexForh1{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;
    min-width: 355px;
 }
 .dividerH1{
    display: flex;
 }
h1{
    font-size: 38px;
    text-align: center;
}
h2{
    color: #000;
font-size: 35px;
font-style: normal;
line-height: 55px;
}
h3{
    color: #000;
text-align: center;
font-size: 20px;
font-weight: 300;
line-height: 30px;
max-height: 169px;
min-height: 90px;
}
.h1Adelie{
color: #4CF049;
}
.h1Commerce{
color: #000;
}
.homeFirstBanner{
    padding-top: 89px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 354px;
}
.homeFirstBannerH2Box{
    height: 169px;
}
.firstBannerText{
    color: #000;
font-family: gilroylight;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 27px;

}
.h2Relative{
    position: relative;
}

.Optimal{
background-image: url('../assets/vectors/homeFirstOptimal.svg');
background-size: 96% 155%;
background-position: revert;
}
.Solution{
 background-image: url('../assets/vectors/homeFirstSolution.svg');   
 background-size: 96% 155%;
background-position: revert;
}

/*Медіазапити*/

@media (min-width: 576px) { 
h1{
font-size: 42px;
}
 }


@media (min-width: 768px) { 
h1{
font-size: 46px;
}
}

@media (min-width: 992px) { 
h1{
font-size: 50px;
}
 }


@media (min-width: 1200px) { 
h1{
font-size: 58px;
}
 }


@media (min-width: 1400px) { 
h1{
font-size: 70px;
}
 }
 </style>