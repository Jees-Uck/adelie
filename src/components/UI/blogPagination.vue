<template>
  <div class="pagination">
    <button class="paginationButton paginationButtonLeft" @click="gotoPage(currentPage - 1)" :disabled="currentPage === 1">&lt;</button>
    <span v-for="page in visiblePages" :key="page">
      <a
        :class="{
          pageNum: true,
          'current-page': page === currentPage,
        }"
        @click="handleClick(page)"
      >
        {{ page === '...prev' || page === '...next' ? '...' : page }}
        
      </a>
    </span>
    <button class="paginationButton paginationButtonRight" @click="gotoPage(currentPage + 1)" :disabled="currentPage === totalPages">&gt;</button>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, computed, onMounted, onBeforeUnmount } from 'vue';

const { currentPage, pageSize, totalItems } = defineProps(['currentPage', 'pageSize', 'totalItems']);
const { emit } = getCurrentInstance();

const totalPages = ref(Math.ceil(totalItems / pageSize));
const currentRangeStart = ref(1);
const currentRangeEnd = ref(Math.min(3, totalPages.value));
const numVisiblePages = ref(3); 

const gotoPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('pageChange', page);
    if (page > currentRangeEnd.value || page < currentRangeStart.value) {
      updateVisibleRange(page);
    }
    // window.scrollTo(0, 0);
  }
};

const visiblePages = computed(() => {
  const pages = [];
  for (let i = currentRangeStart.value; i <= currentRangeEnd.value; i++) {
    pages.push(i);
  }
  if (currentRangeStart.value > 1) pages.unshift('...prev');
  if (currentRangeEnd.value < totalPages.value) pages.push('...next');
  return pages;
});

const isCurrentPage = (page) => page === currentPage;

const updateVisibleRange = (page) => {
  currentRangeStart.value = Math.max(1, page - Math.floor(numVisiblePages.value / 2));
  currentRangeEnd.value = Math.min(totalPages.value, currentRangeStart.value + numVisiblePages.value - 1);
  if (currentRangeEnd.value - currentRangeStart.value < numVisiblePages.value - 1) {
    currentRangeStart.value = Math.max(1, currentRangeEnd.value - numVisiblePages.value + 1);
  }
};

const changePageRange = (type) => {
  if (type === 'prev') {
    const targetPage = currentRangeStart.value - numVisiblePages.value;
    if (targetPage > 0) {
      currentRangeStart.value = targetPage;
      currentRangeEnd.value = targetPage + numVisiblePages.value - 1;
    }
  } else if (type === 'next') {
    const targetPage = currentRangeEnd.value + 1;
    if (targetPage <= totalPages.value) {
      currentRangeStart.value = targetPage;
      currentRangeEnd.value = Math.min(totalPages.value, targetPage + numVisiblePages.value - 1);
    }
  }
};

const handleClick = (page) => {
  if (page === '...prev' || page === '...next') {
    changePageRange(page === '...prev' ? 'prev' : 'next');
  } else {
    gotoPage(page);
  }
};

const handleResize = () => {
  numVisiblePages.value = window.innerWidth >= 768 ? 5 : 3; 
  updateVisibleRange(currentPage);
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});


</script>


<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

}

.pageNum {
  cursor: pointer;
  position: relative;
}

.hover-page:hover {
  color: blue; 
}

.current-page {
  font-weight: bold; 
}

.paginationButton {
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  color: #000;
  text-align: center;
  font-family: gilroylight;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
}

.paginationButton:disabled {
  cursor: default;
  opacity: 0.5;
}


@media (min-width: 768px) {
  
}
</style>
