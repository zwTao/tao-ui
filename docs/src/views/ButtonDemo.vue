<template>
    <div class="demo-container">
      <h2 class="demo-title">Button 按钮</h2>
      <p class="demo-desc">常用的操作按钮，支持多种状态和样式。</p>
      
      <!-- 基础用法 -->
      <div class="demo-section">
        <h3>基础用法</h3>
        <div class="demo-showcase">
          <tao-button>默认按钮</tao-button>
          <tao-button type="primary">主要按钮</tao-button>
          <tao-button type="success">成功按钮</tao-button>
          <tao-button type="warning">警告按钮</tao-button>
          <tao-button type="danger">危险按钮</tao-button>
        </div>
        <CodeBlock :code="basicCode" />
      </div>
  
      <!-- 禁用状态 -->
      <div class="demo-section">
        <h3>禁用状态</h3>
        <div class="demo-showcase">
          <tao-button disabled>禁用按钮</tao-button>
          <tao-button type="primary" disabled>禁用主要</tao-button>
        </div>
        <CodeBlock :code="disabledCode" />
      </div>
    </div>
  </template>
  
  <script setup>
  import TaoButton from '../components/ui/TaoButton.vue'
  import CodeBlock from '../components/CodeBlock.vue'
  
  const basicCode = `
  <tao-button>默认按钮</tao-button>
  <tao-button type="primary">主要按钮</tao-button>
  <tao-button type="success">成功按钮</tao-button>`
  
  const disabledCode = `
  <tao-button disabled>禁用按钮</tao-button>
  <tao-button type="primary" disabled>禁用主要</tao-button>`
  </script>
  
  <style scoped>
  .demo-container { padding: 24px; }
  .demo-title { color: #1f2d3d; margin-bottom: 12px; }
  .demo-desc { color: #5e6d82; margin-bottom: 40px; }
  .demo-section { margin-bottom: 40px; }
  .demo-section h3 { 
    color: #409eff;
    border-left: 4px solid #409eff;
    padding-left: 10px;
    margin: 20px 0;
  }
  .demo-showcase {
    padding: 20px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .demo-showcase > * { margin-right: 12px; }
  </style>