<script setup lang="ts"></script>

<template>
  <ElButton>
    <slot />
  </ElButton>
</template>

<style>
.el-button {
  border-radius: 8px;
  height: 40px;
  font-size: 16px;
}

.el-button--large {
  height: 44px;
}

.el-button--info {
  color: var(--el-color-black);
}

.el-button--info:hover {
  color: var(--el-color-primary) !important;
  background-color: #efefef !important;
}
</style>
