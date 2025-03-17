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
    border: 1px solid var(--border-color);
    background: #fff;
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.3s;
    }
    .tao-button.primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
    }
    .tao-button.success {
    background: var(--success-color);
    border-color: var(--success-color);
    color: white;
    }
  </style>