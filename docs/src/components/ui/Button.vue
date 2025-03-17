<template>
    <button class="tao-button" :class="[type]">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  defineProps({
    type: { type: String, default: 'default' }
  })
  </script>
  
  <style scoped>
  .tao-button {
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    background: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }
  .tao-button.primary {
    background: #409eff;
    color: white;
    border-color: #409eff;
  }
  .tao-button:hover { opacity: 0.8; }
  </style>