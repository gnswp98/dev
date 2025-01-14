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
  display: none;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 12;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
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
@media (max-width: 768px) {
  .menu-button {
    display: block;
  }
  .content {
    margin-left: 0; /* Remove reserved space for sidebar */
  }
  .sidebar {
    left: -200px; /* Ensure it's hidden on small screens */
  }
  .sidebar-visible {
    left: 0; /* Slide in on small screens */
  }
}
</style>
