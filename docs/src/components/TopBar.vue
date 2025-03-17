<template>
    <header v-if="isTopBarVisible" class="top-bar">
        <img src="D:\Qianduan\project\tao-ui\docs\src\assets\T.jpg" alt="logo" @click="ToHome">
        <p>Tao-UI</p>
    </header>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useUIStore } from '../stores/index.js';
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const uiStore = useUIStore();
    const {isTopBarVisible} = storeToRefs(uiStore);

    function ToHome(){
        router.push({name: 'Home'})
    }
</script>

<style scoped>
    .top-bar {
        position: fixed; 
        top: 0;
        left: 0;
        right: 0;
        height: 60px; 
        background-color: white; /* 背景颜色 */
        color: #409eff; /* 文字颜色 */
        display: flex;
        align-items: center;
        z-index: 1000; /* 确保在最顶层 */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    }

    .top-bar img{
        width: 50px;
        height: 50px;
        margin: 30px;
        border-radius: 5px;
    }

    .top-bar p{
        font-size: 1.2em;
        font-weight: bold;
    }
</style>