<template>
  <div class="inner-wrap">
    <div class="visual-box">
      <div class="visual-wrap swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(image, index) in images"
            :key="index"
          >
            <a :href="image.link" target="_blank" title="새창열림">
              <img :src="image.src" :alt="image.alt" />
            </a>
          </div>
        </div>
      </div>
      <div class="swiper-navi">
        <div class="swiper-pagination">
          <span>{{ currentSlide }}</span> / <span>{{ totalSlides }}</span>
        </div>
        <button class="swiper-button-prev" @click="prevSlide">이전 슬라이드</button>
        <button class="swiper-button-next" @click="nextSlide">다음 슬라이드</button>
      </div>
    </div>

    <div class="search-box">
      <div class="tit">자주찾는 검색</div>
      <div class="pop-search">
        <ul class="keyword-list">
          <li v-for="(keyword, index) in keywords" :key="index">
            <a href="javascript:;" @click="searchKeyword(keyword)">
              {{ index + 1 }}. {{ keyword }}
            </a>
          </li>
        </ul>
      </div>
      <form @submit.prevent="search">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="찾으시는 서비스를 입력하세요"
          title="검색어 입력"
        />
        <button type="submit">검색</button>
      </form>
    </div>
  </div>
</template>

<script>
import '@/assets/css/LoginCSS.css'

export default {
  data() {
    return {
      images: [
        {
          src: "/images/userUploads/int/2024/09/MB_20240930_01.png",
          alt: "정부24 100배 활용방법 인감증명서 발급 서비스",
          link: "https://blog.naver.com/korea_gov/223597233237",
        },
        {
          src: "/images/userUploads/int/2025/01/20250110_main.png",
          alt: "2024년 귀속 연말정산 서류 한번에 발급 받으세요.",
          link: "https://blog.naver.com/korea_gov/223721725554",
        },
      ],
      keywords: ["주민등록등본", "가족관계증명서", "세목별과세증명서", "전입신고", "여권재발급"],
      searchQuery: "",
      currentSlide: 1,
      totalSlides: 2,
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide =
        this.currentSlide === 1 ? this.totalSlides : this.currentSlide - 1;
    },
    nextSlide() {
      this.currentSlide =
        this.currentSlide === this.totalSlides ? 1 : this.currentSlide + 1;
    },
    searchKeyword(keyword) {
      this.searchQuery = keyword;
    },
    search() {
      console.log("검색어:", this.searchQuery);
    },
  },
};
</script>