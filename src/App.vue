<template>
  <div id="app" class="app-container">
    <!-- 메뉴 버튼 start -->
    <button class="menu-button" @click="toggleSidebar">☰</button>
    <!-- 메뉴 버튼 end -->

    <!-- (작은 화면일 때) -->
    <div class="sidebar-overlay" 
      v-if="isSidebarOpen && isSmallScreen" 
      @click="closeSidebar"
    ></div>

    <!-- 사이드바바 -->
    <Sidebar 
      :class="{ 'sidebar-visible': isSidebarOpen }" 
      @navigate="changeView" 
    />

    <!-- Content -->
    <div class="content">
      <component :is="currentView" />
    </div>

  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Contact from './components/Contact.vue';
import map from './components/map.vue'

export default {
  components: { Sidebar },
  data() {
    return {
      isSidebarOpen: window.innerWidth > 768, // Sidebar visibility on larger screens
      currentView: Home, // Default view
    };
  },
  computed: {
    isSmallScreen() {
      return window.innerWidth <= 768;
    },
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // Toggle sidebar visibility
    },
    closeSidebar() {
      if (this.isSmallScreen) this.isSidebarOpen = false; // Close sidebar for small screens
    },
    changeView(view) {
      switch (view) {
        case 'Home':
          this.currentView = Home;
          break;
        case 'Login':
          this.currentView = Login;
          break;
        case 'Contact':
          this.currentView = Contact;
          break;
        case 'map':
          this.currentView = map;
      }
      this.closeSidebar(); // Close sidebar after navigating on small screens
    },
    handleResize() {
      this.isSidebarOpen = window.innerWidth > 768; // Adjust sidebar visibility on resize
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
<style>
/* Main Container */
.app-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  position: relative;
  overflow: hidden; /* Prevent content from spilling */
}

/* Menu Button */
.menu-button {
  display: none; /* 기본적으로 숨김 (작은 화면에서만 보이게 설정) */
  position: fixed;
  top: 20px; /* 버튼을 상단으로 약간 띄움 */
  left: 20px; /* 버튼을 왼쪽으로 약간 띄움 */
  z-index: 15; /* 사이드바 위로 버튼을 표시 */
  font-size: 24px;
  background: #ffffff; /* 버튼 배경을 흰색으로 설정 */
  border: 1px solid #ccc; /* 경계선 추가 */
  border-radius: 4px; /* 둥근 모서리 */
  padding: 5px 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

/* Hover 및 클릭 효과 */
.menu-button:hover {
  background: #f0f0f0; /* 버튼 배경색 변경 */
  transform: scale(1.05); /* 버튼 크기 확대 */
}

.menu-button:active {
  background: #e0e0e0; /* 클릭 시 배경 변경 */
  transform: scale(0.95); /* 클릭 시 살짝 축소 */
}

/* Sidebar Overlay */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

/* Sidebar */
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 10px;
  z-index: 11;
  position: fixed;
  top: 0;
  left: -200px; /* Hidden by default */
  height: 100%;
  transition: transform 0.3s ease, left 0.3s ease;
}

.sidebar-visible {
  left: 0; /* Slide in the sidebar */
}

/* Right Content */
.content {
  flex: 1;
  padding: 20px;
  margin-left: 200px; /* Reserve space for the sidebar */
  transition: margin-left 0.3s ease;
}

/* 작은 화면 대응 */
@media (max-width: 768px) {
  .menu-button {
    display: block; /* 작은 화면에서만 메뉴 버튼 표시 */
  }

  .content {
    margin-left: 0; /* 작은 화면에서는 사이드바 공간 제거 */
  }

  .sidebar {
    left: -200px; /* 작은 화면에서 사이드바 숨김 */
  }

  .sidebar-visible {
    left: 0; /* 작은 화면에서 사이드바 표시 */
  }
}
</style>
