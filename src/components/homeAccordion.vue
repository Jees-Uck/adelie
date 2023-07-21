<script setup>
import { ref } from "vue";

const accordionItems = ref([
  {
    header: "Design and Wireframing",
    contentHeader: "Discovery and Planning:",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
  {
    header: "Testing and Quality Assurance",
    contentHeader: "Planning:",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
  {
    header: "Deployment and Launch",
    contentHeader: " ",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
  {
    header: "Post-Launch Support and Maintenance",
    contentHeader: "Discovery and Planning:",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
  {
    header: "Development and Integration",
    contentHeader: "DiscoveryandPlanning Planning :",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
]);

function toggleAccordion(index) {
  accordionItems.value[index].active = !accordionItems.value[index].active;
}

for (const item of accordionItems.value) {
  const words = item.contentHeader.split(" ");
  item.firstWord = words.length > 0 ? words[0] : "";
}
</script>
<template>
  <div class="accordion">
    <div
      v-for="(item, index) in accordionItems"
      :key="index"
      class="accordionItem"
    >
      <button class="accordionHeader" @click="toggleAccordion(index)">
        {{ item.header }}
        <div class="accordionButtonPlus"></div>
      </button>
      <div class="accordionContent" v-if="item.active">
        <h3 class="contentHeader">
          <span class="first-word">{{ item.firstWord }}</span>
          {{ item.contentHeader.substring(item.firstWord.length) }}
        </h3>
        <p class="contentText">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.accordion {
  padding-top: 51px;
}
.accordionHeader {
  min-width: 100%;
  display: flex;
  align-items: center;
  color: #000;
  font-family: gilroyregular;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  text-align: start;
  padding: 34px 0 0 0;
  background-color: transparent;
  border: none;
}
.contentHeader {
  color: #000;
  font-family: gilroyregular;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
  padding: 27px 0 24px 0;
}
.first-word {
  position: relative;
  z-index: 2;
}

.first-word::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 2px;
  width: 99%;
  height: 15px;
  background-color: rgba(76, 240, 73, 1);
  z-index: -1;
}
.contentText {
  color: #000;
  font-family: gilroylight;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 27px;
}
</style>