<template>
  <div class="container">
    <div class="singleBlogPageTitleBox"> 
      <h2 class="singleBlogPageTitle">{{ singleBlog.title }}</h2>
      <div class="blogBreadCrumbsBox">
        <Breadcrumbs :breadcrumbs="dynamicBreadcrumbs" />
      </div>
    </div>

    <div class="singleBlogCardBox">
      <div class="singleBlogCard">
        <div class="singleBlogImgBox">
          <img
            :src="singleBlog.image"
            :alt="singleBlog.titleAlt"
            class="singleBlogCardImage"
          />
          <div class="singleBlogDateAuthorBox">
            <p class="singleBlogCardDate">{{ singleBlog.date }}</p>
            <p class="singleBlogCardAuthor">{{ singleBlog.author }}</p>
          </div>
        </div>

        <div class="singleBlogCardTextBox">
          <p class="singleBlogCardContent">{{ singleBlog.isMainTextBlogFirst }}</p>
        </div>
      </div>
    </div>

    <SingleBlogText :blogTexts="singleBlog.blogTexts"/>
    
    <div class="endLine"></div>
    <BlogSlider :blogs="blogs" :activeBlog="singleBlog" />

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Breadcrumbs from './../components/UI/breadCrumbs.vue';
import SingleBlogText from '../components/SingleBlogText.vue';
import BlogSlider from '../components/blogSlider.vue';

const blogId = ref(null);
const singleBlog = ref({});
const blogs = ref([]);
const route = useRoute();
blogId.value = route.params.id;

const fetchAllBlogs = async () => {
  try {
    const response = await axios.get('/src/blogs.json');
    blogs.value = response.data.data.blogs;
  } catch (e) {
    console.error(e);
  }
};

const fetchSingleBlog = async () => {
  try {
    const response = await axios.get('/src/blogs.json');
    const allBlogs = response.data.data.blogs;
    singleBlog.value = allBlogs.find((blog) => blog.id === Number(blogId.value));
    console.log('Single Blog:', singleBlog.value);
  } catch (e) {
    console.error(e);
  }
};

const dynamicBreadcrumbs = computed(() => {
  const blogBreadcrumb = { label: singleBlog.value.title, to: `/blog/${blogId.value}` };
  const defaultBreadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
  ];
  return [...defaultBreadcrumbs, blogBreadcrumb];
});

const currentBlogIndex = computed(() => blogs.value.findIndex((blog) => blog.id === singleBlog.value.id));
const previousBlog = computed(() => blogs.value[currentBlogIndex.value - 1]);
const nextBlog = computed(() => {
  const nextIndex = currentBlogIndex.value + 1;
  return nextIndex < blogs.value.length ? blogs.value[nextIndex] : null;
});

const changeBlogContent = () => {
  singleBlog.value = findBlogById(blogId.value);
};

const findBlogById = (blogId) => {
  return blogs.value.find((blog) => blog.id === blogId);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

watch(() => route.params.id, (newBlogId) => {
  blogId.value = newBlogId;
  fetchSingleBlog();
  scrollToTop();
});

onMounted(async () => {
  await Promise.all([fetchSingleBlog(), fetchAllBlogs()]);
});
</script>


<style scoped>
.singleBlogPageTitleBox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
  align-content: center;
  flex-wrap: wrap;
  gap: 37px;
}
.singleBlogPageTitle{
  text-align: center;
  font-family: gilroyregular;
  font-size: 40px;
}

.singleBlogCardBox{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.singleBlogCard {
  max-width: 793px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding-top: 44px;
}

.singleBlogCardImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.singleBlogImgBox {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  width: 100%;
  height: 230px;
}

.singleBlogDateAuthorBox {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 278px;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px 10px 49px;
}

.singleBlogCardTitle {
  color: #000;
  font-family: gilroyregular;
  font-size: 23px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;
  padding-top: 8px;
}

.singleBlogCardDate,
.singleBlogCardAuthor {
  position: relative;
  color: #000;
  font-family: gilroylight;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
}

.singleBlogCardDate::before {
  content: url('../assets/vectors/globalVectors/clock.svg');
  min-width: 18px;
  min-height: 18px;
  max-width: 18px;
  max-height: 18px;
  position: absolute;
  left: -28px;
  top: 3px;
}

.singleBlogCardAuthor::before {
  content: url('../assets/vectors/globalVectors/admin.svg');
  min-width: 18px;
  min-height: 18px;
  max-width: 18px;
  max-height: 18px;
  position: absolute;
  left: -27px;
  top: 1px;
}
.singleBlogCardTextBox{
  width: 100%;
  text-overflow: ellipsis;
  margin-bottom: 13px;
}
.singleBlogCardContent {
  padding-top: 19px;
  color: #000;
  font-family: gilroylight;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
}
.borderOfBoldText{
  border: 1px solid #000;
  padding: 12px;
  position: unset;
}
.singleBlogCardContentBold {
  padding-top: 19px;
  font-family: gilroymedium;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
}

/*Медіазапити*/

@media (min-width: 576px) { 
  .imgBox {
    height: 330px;
  }
}

@media (min-width: 768px) { 
  .imgBox {
    height: 370px;
  }
}

@media (min-width: 992px) { 
  .imgBox {
    height: 400px;
  }
}

@media (min-width: 1200px) { 
  .singlePageImgBox {
    height: 420px;
  }
  .singlePageCardTitle {
    font-size: 30px;
    padding-top: 8px;
  }
  .singlePageCardTextBox{
    max-height: 105px;
    margin-bottom: 16px;
  }
  .singlePageCardContent {
    padding-top: 13px;
    font-size: 20px;
    line-height: 35px;
  }
}
@media (min-width: 1400px) { 
  .singlePageCard{
    padding-top: 35px;
  }
}
@media (min-width: 1920px) { 
  .singlePageCard{
    padding-top: 40px;
  }
}
</style>