<template>
  <div class="sidebar">
    <ul>
      <li class="button home_btn" @click="navigate('Home')">홈페이지</li>
      <li class="button" @click="navigate('Login')">로그인페이지</li>
      <li class="button" @click="navigate('Contact')">Contact</li>
      <li class="button" @click="navigate('map')">찾아오시는 길</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    navigate(view) {
      this.$emit('navigate', view); // 부모 컴포넌트로 view 이벤트 전달
    },
  },
};
</script>

<style scoped>
/* Sidebar 기본 스타일 */
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 66px 10px 10px; /* 메뉴 버튼 공간을 위한 상단 여백 추가 */
  position: fixed;
  top: 0;
  left: -200px; /* 기본적으로 숨김 */
  height: 100%;
  z-index: 10;
  transition: transform 0.3s ease, left 0.3s ease;
}

.sidebar-visible {
  left: 0; /* 사이드바 보이기 */
}

/* 리스트 스타일 */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 15px 0; /* 버튼 간 간격 */
}

/* 버튼 스타일 */
.button {
  display: block;
  padding: 10px 15px;
  background-color: #1e3a8a; /* 진한 파란색 */
  color: #ffffff; /* 글자 색상: 흰색 */
  text-align: center;
  border-radius: 8px; /* 둥근 모서리 */
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

/* 버튼 호버 및 클릭 효과 */
.button:hover {
  background-color: #2563eb; /* 밝은 파란색 */
  transform: scale(1.05); /* 살짝 확대 */
}

.button:active {
  background-color: #1d4ed8; /* 더 진한 파란색 */
  transform: scale(0.95); /* 살짝 축소 */
}

/* 홈 버튼 스타일 */
.home_btn {
  background-color: #2563eb; /* 기본보다 약간 밝은 파란색 */
}
</style>
