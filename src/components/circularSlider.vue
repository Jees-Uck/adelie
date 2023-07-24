<template>
  <div class="container">
    <div class="mainSlider">
      <div class="sliderContainer" ref="slidesContainer">
        <div class="sliderCircles">
          <div
            class="dot"
            v-for="(slide, index) in slides"
            :key="index"
            :style="getDotStyle(index)"
            @click="changeSlide(index)"
            :class="{ active: index === activeSlide }"
          >
            
            <div class="dotLabel" :style="getDotLabelStyle(index)">
              {{ slide.title }}
            </div>
          </div>
        </div>
        <div class="activeSlideTitle">{{ slides[activeSlide].title }}</div>
      </div>

      <div class="slidesContainer" ref="slidesContainer">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: index === activeSlide }"
        >
        <span class="titleSlide">
            <span class="titleSlideFirstWord">
                {{ slide.title+":" }}
            </span>        
        </span>
        {{ slide.content }}
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";

const slides = ref([
  {
    title: "Discovery and Planning",
    content: "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
  },
  {
    title: "Design and Wireframing",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
  {
    title: "Development and Integration",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
  {
    title: "Testing and Quality Assurance",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
  {
    title: "Deployment and Launch",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
  {
    title: "Post-Launch Support and Maintenance",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
]);
const slidesContainer = ref(null);
const activeSlide = ref(0);

function changeSlide(index) {
  activeSlide.value = index;
  updateSlideSizes();
}

function updateSlideSizes() {
  const slideItems = slidesContainer.value.querySelectorAll(".slide");

  slideItems.forEach((slide, index) => {
    if (index === activeSlide.value) {
      slide.style.width = "466px";
      slide.style.opacity = "1";
    } else {
      slide.style.width = "0";
      slide.style.opacity = "0";
    }
  });
}

function getDotStyle(index) {
   const positions = [
    { top: "74px", left: "31px" },
    { top: "-18px", left: "208px", },
    { top: "67px", left: "394px", },
    { top: "298px", left: "432px",  },
    { top: "437px", left: "289px",  },
    { top: "406px", left: "74px", },
  ];
  return {
    top: positions[index].top,
    left: positions[index].left,
  };
}

function getDotLabelStyle(index) {
  const positions = [
    { top: "-62px", left: "-150px" },
    { top: "-55px", left: "-145px" },
    { top: "-7px", left: "50px", textAlign: "left"  },
    { top: "-7px", left: "43px", width: "145px", textAlign: "left" },
    { top: "35px", left: "-150px" },
    { top: "-15px", left: "-165px", width: "145px" },
  ];

  return {
    top: positions[index].top,
    left: positions[index].left,
    width: positions[index].width,
    textAlign: positions[index].textAlign,
  };
}



onMounted(() => {
  updateSlideSizes();
});
</script>




<style>
.mainSlider {
  display: flex;
  flex-direction: row;
  min-height: 604px;
  padding-top: 95px;
  position: relative;
  min-width: 100%;

}

.sliderContainer {
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
}

.sliderCircles {
  width: 466px;
  height: 466px;
  border-radius: 466px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; 
  justify-content: center;
  align-items: center;
}
.sliderCircles::before {
    content: "";
  min-width: 321px;
  min-height: 321px;
  border-radius: 50%;
  background-color: rgba(76, 240, 73, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; 
  justify-content: center;
  align-items: center;
}
.dot {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(241, 241, 241, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  opacity: 1;
  position: absolute;
  z-index: 2;
  background-color: hsl(0, 0%, 95%);
}

.dot.active {
  background-color: rgba(0, 0, 0, 1);
  z-index: 2;
}
.dotLabel{
    width: 180px;
    height: auto;
    color: #000;
    text-align: right;
    font-family: gilroyregular;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;
    position: absolute;
}
.activeSlideTitle {
  color: rgba(0, 0, 0, 1);
  text-align: center;
  font-family: gilroylight;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
  max-width: 226px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.slidesContainer {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.slide {
    width: 466px;
    height: 318px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #000;
    font-family: gilroylight;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px;
}



.titleSlide{
    color: #000;
    font-family:gilroymedium;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px;
    padding-bottom: 38px;
    max-width: 466px;
    position: relative;
    min-width: 466px;
}
.titleSlideFirstWord ::after{
content: '';
width: 100%;
  background-color: rgba(76, 240, 73, 1);

}


</style>


