<template>
    <div class="home">
        <div class="hero">
        <h1>Tao UI</h1>
        <p class="desc">一个基于 Vue3 的轻量级组件库，简洁而优雅</p>
        </div>
        <button @click="goToButton" class="btn">Start</button>
    </div>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import { storeToRefs } from 'pinia';

    const router = useRouter();

    function goToButton() {
        router.push({ name: 'Button' });
    }
</script>
  
<style scoped>
.home {
  text-align: center;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.btn:hover {
  background-color: #38a169;
}

.hero {
text-align: center;
padding: 80px 0;
background: linear-gradient(120deg, #409eff, #36c6d9);
color: white;
}

.hero h1 {
font-size: 3rem;
margin-bottom: 20px;
}

.desc {
font-size: 1.2rem;
opacity: 0.9;
}
</style>