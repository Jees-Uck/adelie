<template>
<div class="cardBox">
  <div class="card">
    <div class="imgBox">
      <img :src="contentItem.image" :alt="contentItem.titleAlt" class="cardImage" />
      <div class="dateAuthorBox">
        <p class="cardDate">{{ contentItem.date }}</p>
        <p class="cardAuthor">{{ contentItem.author }}</p>
      </div>
    </div>
    <h3 class="cardTitle">{{ contentItem.title }}</h3>
    <div class="cardTextBox">
        <p class="cardContent">{{ contentItem.content }}</p>
    </div>

    <a :href="contentItem.link" class="readMore">{{ contentItem.link }}</a>
  </div>
</div>


</template>

<script setup>
const props = defineProps({
  contentItem: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.cardBox{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.card {
    max-width: 793px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding-top: 47px;

}

.cardImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: grayscale(85%);
    transition: filter 0.5s ease;
}

.imgBox {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: auto;
    width: 100%;
    height: 230px;
}

.card:hover .cardImage {
  filter: grayscale(0%);
}

.dateAuthorBox {
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

.cardTitle {
  color: #000;
  font-family: gilroyregular;
  font-size: 23px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;
  padding-top: 8px;
}

.cardDate,
.cardAuthor {
  position: relative;
  color: #000;
  font-family: gilroylight;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
}

.cardDate::before {
  content: url('../assets/vectors/globalVectors/clock.svg');
  min-width: 18px;
  min-height: 18px;
  max-width: 18px;
  max-height: 18px;
  position: absolute;
  left: -28px;
  top: 3px;
}

.cardAuthor::before {
  content: url('../assets/vectors/globalVectors/admin.svg');
  min-width: 18px;
  min-height: 18px;
  max-width: 18px;
  max-height: 18px;
  position: absolute;
  left: -27px;
  top: 1px;
}
.cardTextBox{
  width: 100%;
  max-height: 155px;
  text-overflow: ellipsis;
  margin-bottom: 13px;
}
.cardContent {
  padding-top: 19px;
  color: #000;
  font-family: gilroylight;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
}

.readMore {
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
  width: 111px;
  height: 35px;
}
.readMore::before {
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
.readMore:hover::before {
  transform: translateY(-50%); 
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
.imgBox {
  height: 420px;
}
.cardTitle {
  font-size: 30px;
  padding-top: 8px;
}
.cardTextBox{
  max-height: 105px;
  margin-bottom: 16px;
}

.cardContent {
  padding-top: 13px;
  font-size: 20px;
  line-height: 35px;
}
.readMore {
    padding-top: 0;
    font-size: 20px;

}
}
@media (min-width: 1400px) { 
.card{
    padding-top: 35px;
}

}
@media (min-width: 1920px) { 
.card{
    padding-top: 40px;
}
}
</style>
