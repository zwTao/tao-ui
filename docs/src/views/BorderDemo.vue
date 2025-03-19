<template>
    <div class="demo-comtainer">
        <h2 class="demo-title">Border 边框</h2>
        <p class="demo-desc">常用的边框属性，支持多种状态和样式</p>

        <!-- 边框样式 -->
        <div class="demo-section">
            <h3>边框样式</h3>
            <div class="demo-showcase">
                <tao-border borderType="dashed">1</tao-border>
                <tao-border borderType="dotted">2</tao-border>
                <tao-border>3</tao-border>
            </div>
            <CodeBlock :code="typeCode" />
        </div>
        <!-- 圆角 -->
        <div class="demo-section">
            <h3>圆角</h3>
            <div class="demo-showcase">
                <tao-border radius="5">1</tao-border>
                <tao-border radius="10">2</tao-border>
                <tao-border radius="15">3</tao-border>
            </div>
            <CodeBlock :code="radiusCode" />
        </div>
        <!-- 宽度与颜色 -->
        <div class="demo-section">
            <h3>宽度与颜色</h3>
            <div class="demo-showcase">
                <tao-border width="1" color="#409eff">1</tao-border>
                <tao-border width="3" color="#969696">2</tao-border>
                <tao-border width="5" color="#328627">3</tao-border>
            </div>
            <CodeBlock :code="wAcCode" />
        </div>
    </div>
</template>

<script setup>
import TaoBorder from '../components/ui/TaoBorder.vue';
import CodeBlock from '../components/CodeBlock.vue';

const typeCode = `
<tao-border borderType="dashed">1</tao-border>
<tao-border borderType="dotted">2</tao-border>
<tao-border>3</tao-border>
`

const radiusCode = `
<tao-border radius="5">1</tao-border>
<tao-border radius="10">2</tao-border>
<tao-border radius="15">3</tao-border>
`

const wAcCode = `
<tao-border width="1" color="#409eff">1</tao-border>
<tao-border width="3" color="#969696">2</tao-border>
<tao-border width="5" color="#328627">3</tao-border>
`
</script>

<style>
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