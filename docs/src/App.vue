<script setup>
import TopBar from "./components/TopBar.vue"
import SideBar from './components/SideBar.vue';
import { storeToRefs } from 'pinia';
import { useUIStore } from './stores/index';

const uiStore = useUIStore();
const { isTopBarVisible, isSideBarVisible } = storeToRefs(uiStore);
</script>

<template>
  <div id="app">
    <TopBar />
    <div class="main-container">
      <SideBar v-if = "isSideBarVisible"/>
      <div class="content-area">
        <router-view></router-view>
      </div>
    </div>
  </div>
  
</template>

<style>
#app{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.main-container {
  display: flex;
}

.content-area {
  flex-grow: 1;
  padding: 20px;
  margin-top: 60px; /* 与顶部栏高度一致 */
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }

  .content-area {
    margin-left: 0;
    margin-top: 0;
  }
}
</style>