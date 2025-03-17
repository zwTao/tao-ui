<template>
    <div class="code-block">
      <button @click="toggleCode">显示代码</button>
      <pre v-if="show" class="language-html"><code>{{ code }}</code></pre>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-tomorrow.css'
  
  const props = defineProps({ code: String })
  const show = ref(false)
  
  const toggleCode = () => {
    show.value = !show.value
    if (show.value) {
      // 手动触发代码高亮
      setTimeout(() => Prism.highlightAll(), 100)
    }
  }
  </script>