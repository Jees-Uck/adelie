<template>
  <div class="container">
    <div class="portfolioBanner">
      <div class="portfolioTittleBox">
        <h2 class="portfolioTitle">Portfolio</h2>
      </div>
      <div class="portfolioBreadCrumbsBox">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
    </div>
    <div class="categoryFilter">
      <div class="categoryFilterButtons">
      <button
        class="categoryFilterBtn"
        :class="{ 'activeCategory': isAllActive }"
        @click="selectCategory(null)"
        :autofocus="isAllActive"
          >
        All
      </button>
          <button class="categoryFilterBtn" v-for="(count, category) in itemCountByCategory" :key="category" @click="selectCategory(category)">
            {{ category }} ({{ count }})
          </button>
        </div>
      </div>
    <div class="btnsLine">
    </div>
    <div class="portfolioContent">
      <portfolioCard
        v-for="(item, index) in visiblePortfolioData"
        :key="index"
        :portfolioCard="item"
      />
    </div>
<portfolioPagination
  :currentPage="currentPage"
  :pageSize="pageSize"
  :totalItems="totalItems"
  @pageChange="handlePageChange"
/>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import portfolioCard from "../components/portfolioCard.vue";
import portfolioPagination from '../components/UI/portfolioPagination.vue';
import axios from 'axios';
import Breadcrumbs from './../components/UI/breadCrumbs.vue';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/contact' },
];
const isAllActive = computed(() => selectedCategory.value === null);
const portfolioData = ref([]);
const currentPage = ref(1);
const pageSize = ref(5);
const totalItems = ref(parseInt(localStorage.getItem('totalItems')) || 0);
const selectedCategory = ref(null);



onMounted(async () => {
  try {
    const response = await axios.get('/src/portfolio.json');
    portfolioData.value = response.data.data.portfolioCard;
    totalItems.value = portfolioData.value.length; 
  } catch (error) {
    console.error('Помилка отримання даних:', error);
  }
});



const screenWidth = ref(window.innerWidth);
window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});


const visiblePortfolioData = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;

  let endIndex;
  if (screenWidth.value >= 992 && screenWidth.value < 1400) {
    endIndex = Math.min(startIndex + pageSize.value + 1, totalItems.value);
  } else if (screenWidth.value >= 1400) {
    endIndex = Math.min(startIndex + pageSize.value + 4, totalItems.value);
  } else {
    endIndex = Math.min(startIndex + pageSize.value, totalItems.value);
  }


  const filteredData = selectedCategory.value
    ? portfolioData.value.filter(item => item.category === selectedCategory.value)
    : portfolioData.value;


  endIndex = Math.min(endIndex, filteredData.length);

  return filteredData.slice(startIndex, endIndex);
});

const selectCategory = (category) => {
  selectedCategory.value = category;
  currentPage.value = 1; 
};

const itemCountByCategory = computed(() => {
  const counts = {};

  portfolioData.value.forEach(item => {
    if (counts[item.category]) {
      counts[item.category]++;
    } else {
      counts[item.category] = 1;
    }
  });

  return counts;
});

const handlePageChange = (page) => {
  currentPage.value = page;
  console.log(`Переключено на сторінку ${page}`);
};

</script>




<style scoped>
.container{
  max-width: 1276px;
  margin: 0 auto;
}
.portfolioBanner{
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 37px;
    padding: 35px 0 0 0;
    justify-content: center;
    align-items: center;
}

.portfolioTittleBox{
    max-height: 46px;
}
.portfolioTitle{
    font-family: gilroyregular;
    font-size: 40px;
    line-height: 46px;
}
.portfolioContent{
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
}
.portfolioBreadCrumbsBox{
    display: flex;
    justify-content: center;
}
.categoryFilter{
  padding-top: 36px;
  padding-bottom: 0px;
  display: flex;
  justify-content: center;
}
.categoryFilterButtons {
  max-width: 355px;
  min-width: 355px;
  display: table;
  table-layout: fixed;
}

.categoryFilterBtn {
  display: table-cell;
  width: 50%;
  box-sizing: border-box;
}
.categoryFilterBtn{
text-align: start;
color: #878787;
font-family: gilroylight;
font-size: 17px;
font-weight: 300;
line-height: 35px;
border: none;
background-color: transparent;
position: relative;
min-height: 42px;
}

.categoryFilterBtn:active,
.categoryFilterBtn:focus {
font-family: gilroymedium;
  color: #000000;
  outline: none; 
  font-weight: 500;
}
.categoryFilterBtn:active,
.categoryFilterBtn:focus {
font-family: gilroymedium;
  color: #000000;
  outline: none; 
  font-weight: 500;
}
.categoryFilterBtn:focus::before {
  display: none;
}
.btnsLine{
  display: none;
}
.portfolioContent{
  padding-top: 40px;
}
.portfolioPagination{
    padding-top: 62px;
    padding-bottom: 142px;
}

@media (min-width: 992px){
.portfolioContent{
    flex-direction: row;
}
.categoryFilter{
  padding-top: 65px;
  padding-bottom: 17px;
  display: flex;
  justify-content: center;
}
.categoryFilterBtn {
display: flex;
width: fit-content;
}
.categoryFilterButtons {
display: flex;
max-width: 718px;
gap: 112px;
}
.categoryFilterBtn{
font-size: 20px;
}
.btnsLine{
  display: block;
  opacity: 0.1;
background: #000;
height: 1px;
min-width: 100%;
max-width: 100%;
}
.categoryFilterBtn:focus::before {
  content: '';
  display: block;
  position: absolute;
  width: 17px;
  height: 17px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  bottom: -25px;
  background-color: #000;
  border-radius: 50%;
}
}

@media (min-width: 1400px){
.portfolioBanner{
    padding: 103px 0 0 0;
    gap: 28px;
}
.portfolioTitle{
    font-size: 70px;
}
.portfolioContent{
  padding-top: 58px;
}
.btnsLine{
max-width: 1276px;
}
}
</style>
