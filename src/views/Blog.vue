<template>
  <div class="container">
    <div class="blogBanner">
      <div class="blogTittleBox">
        <h2 class="blogTitle">Блог</h2>
      </div>
      <div class="blogBreadCrumbsBox">
        <div class="breadCrumbs">головна-блог</div>
      </div>
    </div>
    <div class="blogContent">
      <div class="blogFeed">
        <contentCard v-for="contentItem in visibleBlogItems" :key="contentItem.id" :contentItem="contentItem" />
      </div>
    </div>
    <blogPagination
      class="blogPagination"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :totalItems="totalItems"
      @pageChange="handlePageChange"
    />
  </div>
</template>



<script setup>
import { ref, onMounted, computed } from 'vue';
import contentCard from "../components/contentCard.vue";
import blogPagination from './../components/UI/blogPagination.vue';
import axios from 'axios';

const blogItem = ref([]);
const currentPage = ref(1);
const pageSize = ref(5);
const totalItems = ref(parseInt(localStorage.getItem('totalItems')) || 0);
const fetchBlogs = async () => {
  try {
    const response = await axios.get('/src/blogs.json');
    blogItem.value = response.data.data.blogs;
    console.log(`Всього елементів: ${totalItems.value}`);
    console.log(`Всього сторінок: ${totalPages.value}`);
  } catch (e) {
    console.error(e);
  }
};

onMounted(fetchBlogs);

const handlePageChange = (page) => {
  currentPage.value = page;
  console.log(`Переключено на сторінку ${page}`);
};

const totalPages = computed(() => {
  if (totalItems.value === 0) {
    return 0;
  }
  return Math.ceil(totalItems.value / pageSize.value);
});

const visibleBlogItems = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = Math.min(startIndex + pageSize.value, totalItems.value);
  return blogItem.value.slice(startIndex, endIndex);
});
</script>

<style>
.blogBanner{
display: flex;
position: relative;
flex-direction: column;
gap: 37px;
padding: 35px 0 36px 0;
justify-content: center;
align-items: center;
}

.blogTittleBox{
max-height: 46px;
}
.blogTitle{
font-family: gilroyregular;
font-size: 40px;
line-height: 46px;
}
.breadCrumbs{
text-align: center;
font-family: gilroylight;
font-size: 20px;

}
.blogPagination{
  padding-top: 62px;
  padding-bottom: 142px;
}
</style>
