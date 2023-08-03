<template>
  <div class="pagination">
    <button @click="gotoPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
    <span v-for="page in computedPages" :key="page">
      <a class="pageNum"
        :class="{ 'current-page': page === currentPage, 'hover-page': !isCurrentPage(page) }"
        @click="gotoPage(page)"
      >
        {{ page }}
      </a>
    </span>
    <button @click="gotoPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>


<script setup>
import { ref, defineProps, getCurrentInstance, computed } from 'vue';

const { currentPage, pageSize, totalItems } = defineProps(['currentPage', 'pageSize', 'totalItems']);
const { emit } = getCurrentInstance();

const totalPages = ref(Math.ceil(totalItems / pageSize));

const gotoPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('pageChange', page);
    window.scrollTo(0, 0);
  }
};

const computedPages = computed(() => {
  const pages = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i);
  }
  return pages;
});

const isCurrentPage = (page) => page === currentPage;
</script>


<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pageNum{
    cursor: pointer;
}
.hover-page:hover {
  color: blue; 
}

.current-page {
  font-weight: bold; 
}
button {
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

button:disabled {
  cursor: default;
  opacity: 0.5;
}
</style>
