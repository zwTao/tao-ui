<template>
  <aside v-if="isSideBarVisible" class="side-bar">
    <h2>组件列表</h2>
    <nav>
      <router-link to="/components/button" class="nav-item">按钮页面</router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useUIStore } from '../stores/index.js';
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const uiStore = useUIStore();
    const { isSideBarVisible } = storeToRefs(uiStore);
</script>

<style scoped>
.side-bar {
  position: fixed; /* 固定在页面左侧 */
  top: 60px; /* 确保在顶部栏下方 */
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #333; /* 背景颜色 */
  color: white; /* 文字颜色 */
  padding: 20px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.side-bar h2 {
  margin-top: 0;
  font-size: 1.2em;
  font-weight: bold;
}

.side-bar nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.side-bar .nav-item {
  text-decoration: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.side-bar .nav-item:hover {
  background-color: #42b983;
}

@media (max-width: 768px) {
  .side-bar {
    position: static; /* 取消固定位置 */
    width: 100%; /* 宽度变为全屏 */
    height: auto; /* 高度自适应 */
    padding: 10px;
    box-shadow: none; /* 移除阴影 */
  }

  .side-bar h2 {
    font-size: 1em;
  }

  .side-bar nav {
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>