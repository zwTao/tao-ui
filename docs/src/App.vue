<template>
  <div class="app-container">
    <!-- 侧边导航 -->
    <aside class="sidebar">
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/button">Button 组件</router-link>
      </nav>
    </aside>
    
    <!-- 内容区域 -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style>
.app-container { display: flex; min-height: 100vh; }
.sidebar { width: 260px; background: #f8f9fa; border-right: 1px solid #e9ecef; padding: 24px; }
.content { flex: 1; padding: 24px; max-width: 1200px; margin: 0 auto; }
nav a { display: block; padding: 8px 12px; color: #333; text-decoration: none; }
nav a.router-link-exact-active { color: #409eff; font-weight: 500; }
</style>