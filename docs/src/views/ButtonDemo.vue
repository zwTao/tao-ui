<template>
    <div>
      <h2>Button 组件</h2>
      <h3>基础用法</h3>
      <div class="demo-box">
        <tao-button>默认按钮</tao-button>
        <tao-button type="primary">主要按钮</tao-button>
      </div>
    </div>
    <CodeBlock :code="buttonCode" />
  </template>
  
  <script setup>
  import TaoButton from '../components/ui/Button.vue'
  </script>