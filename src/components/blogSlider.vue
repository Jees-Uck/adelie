<template>
  <div class="blogSlider">
    <div class="blogSliderButBox">
      <div class="sliderButton sliderButtonPrevious" @click="showPreviousBlogs" :class="{ 'disabled': !hasPreviousBlogs }">
        Previous
      </div>
      <div class="sliderButton sliderButtonNext" @click="showNextBlogs" :class="{ 'disabled': !hasNextBlogs }">
        Next
      </div>
    </div>
    <div class="blogSliderTitleBox">
      <h3 class="blogSliderTitle">Recommended materials</h3>
    </div>
    <div class="blogCardContainer">
      <div class="blogCards">
        <BlogCard v-for="blog in displayedBlogs" :key="blog.id" :contentItem="blog" class="blogCardItem" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BlogCard from './contentCard.vue'; 

const props = defineProps({
  blogs: Array,
  activeBlog: Object,
});

const itemsPerPage = 2;
const activeIndex = ref(0); 

const setActiveIndex = () => {
  activeIndex.value = props.blogs.findIndex(blog => blog.id === props.activeBlog.id);
};




const displayedBlogs = computed(() => {
  const startIndex = activeIndex.value - (activeIndex.value % itemsPerPage);
  const endIndex = Math.min(startIndex + itemsPerPage - 1, props.blogs.length - 1);

  const filteredBlogs = props.blogs.filter(blog => blog.id !== props.activeBlog.id);
  return filteredBlogs.slice(startIndex, endIndex + 1);
});

const hasPreviousBlogs = computed(() => {
  if (props.activeBlog) {
    return activeIndex.value >= itemsPerPage;
  }
  return false;
});

const hasNextBlogs = computed(() => {
  if (props.activeBlog) {
    return activeIndex.value <= props.blogs.length - itemsPerPage * 2;
  }
  return false;
});

const showPreviousBlogs = () => {
  if (hasPreviousBlogs.value) {
    if (activeIndex.value === 0) {
      activeIndex.value = props.blogs.length - 2; 
    } else {
      activeIndex.value -= itemsPerPage; 
    }
  }

};

const showNextBlogs = () => {
  if (hasNextBlogs.value) {
    activeIndex.value = (activeIndex.value + itemsPerPage) % props.blogs.length;
  }
};
</script>

<style scoped>
.blogSlider {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 83px;
}

.blogSliderButBox{
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
max-width: 255px;

}

.sliderButton {
 display: inline-block;
  position: relative;
  padding-top: 4px;
  color: #000;
  font-family: gilroymedium;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
  text-transform: uppercase;
  text-decoration: none;
  width: auto;

  height: 35px;
  cursor: pointer;
}
.sliderButton::after   {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 15px; 
  background-color: #4CF049; 
  z-index: -1;
  transform: translateY(0); 
  transition: transform 0.3s ease; 
}
.sliderButtonNext{
  width: 20%;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.sliderButton.disabled::after {
  background-color: transparent; 
}
.sliderButton:hover::after {
  transform: translateY(-50%); 
}

.sliderButtonPrevious::before{
content: "";
position: absolute;
background: url('../assets/vectors/BlogSliderArrowLeft.svg');
background-repeat: no-repeat;
width: 30px;
height: 100%;
left: -49px;
top: 50%;
}
.sliderButtonNext::before{
content: "";
position: absolute;
background: url('../assets/vectors/BlogSliderArrowRight.svg');
background-repeat: no-repeat;
width: 30px;
height: 100%;
left: calc(100% + 19px);
top: 50%;
}

.blogSliderTitleBox{
  width: 100%;
padding-top: 37px;
margin-bottom: -26px;
}
.blogSliderTitle{
font-family: gilroylight;
font-size: 35px;
font-style: normal;
font-weight: 300;
line-height: 50px;
}
.blogCardContainer {
  width: 100%;
  margin-top: 20px;
  padding-bottom: 104px;
  
}

.blogCards {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  overflow: hidden;

}


.blogCard {
  flex: 1;
  max-width: calc(50% - 10px);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  max-height: 354px;
}

.blogCard:hover {
  transform: translateY(-5px);
}
.cardImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* медіазапити */

@media (min-width: 576px) { 
.blogSliderButBox{
max-width: 400px;
}

}
@media (min-width: 768px) { 
.blogSliderButBox{
max-width: 400px;
}
}
@media (min-width: 992px) { 

}
@media (min-width: 1200px) { 
.blogSliderTitle{
font-size: 40px;
line-height: 60px;
}
.blogCards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  overflow: hidden;
}

}
@media (min-width: 1400px) { 

}
@media (min-width: 1920px) { 
.blogSliderTitle{
font-size: 50px;
line-height: 70px;
}
}


</style>
