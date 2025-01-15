<template>
        <div>
        <img id="govLogo" src="@/assets/images/gov24_img.jpg">
        <h1>정부24 안내 페이지</h1>
        <p>로그인, 민원 신청, 고객센터 등 필요한 정보를 모아둔 사이트입니다!</p>
    </div>

    <div id="banner" class="banner">
      <div class="banner-image" :style="{ backgroundImage: `url(${photos[currentIndex]})` }"></div>
      <div class="controls">
        <button @click="previousPhoto">&lt;</button>
        <button @click="toggleSlideshow">{{ isPlaying ? '| |' : '▷' }}</button>    
        <button @click="nextPhoto">&gt;</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  
  export default {
    name: "PhotoBanner",
    setup() {
      // 경로 한 번에 몰아서 넣어둠
      const photos = ref([
        require("@/assets/images/20250110_main.png"), 
        require("@/assets/images/MB_20240930_01.png"),
      ]);
      const currentIndex = ref(0);
      const isPlaying = ref(true);
      let interval = null;
  
      const startSlideshow = () => {
        if (!interval) {
          interval = setInterval(() => {
            nextPhoto();
          }, 3000);
        }
      };
  
      const stopSlideshow = () => {
        clearInterval(interval);
        interval = null;
      };
  
      const toggleSlideshow = () => {
        if (isPlaying.value) {
          stopSlideshow();
        } else {
          startSlideshow();
        }
        isPlaying.value = !isPlaying.value;
      };
  
      const nextPhoto = () => {
        currentIndex.value = (currentIndex.value + 1) % photos.value.length;
      };
  
      const previousPhoto = () => {
        currentIndex.value =
          (currentIndex.value - 1 + photos.value.length) % photos.value.length;
      };
  
      onMounted(() => {
        startSlideshow();
      });
  
      onUnmounted(() => {
        stopSlideshow();
      });
  
      return {
        photos,
        currentIndex,
        isPlaying,
        toggleSlideshow,
        nextPhoto,
        previousPhoto,
      };
    },
  };
  </script>
  
  <style scoped>
  .banner {
    width: 1000px;
    height: 400px;
    
    position: relative;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .banner-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    transition: background-image 0.5s ease-in-out;
  }
  
  .controls {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    gap: 10px;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    background: #1b5dc1;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #113069;
  }
  </style>
  