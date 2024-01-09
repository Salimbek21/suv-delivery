<script setup lang="ts">
import { computed } from 'vue'

interface ISelectList {
  value: number | any
  label: string
}

const props = defineProps<{
  modelValue?: any
  list?: ISelectList[]
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <ElSelect v-model="value">
    <ElOption
      v-for="item in props.list"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ElSelect>
</template>

<style>
.el-select {
  width: 100%;
}

.el-select .el-input__wrapper {
  background-color: #ffffff;
  border-radius: 8px;
  height: 40px;
  transition: all 0.2s;
  box-shadow: 0 0 0 1px #8d8d8d inset !important;
}

.el-select.gray:hover .el-input__wrapper {
  background-color: #efefef;
  box-shadow: none !important;
}

.el-select.gray .el-input__wrapper {
  background-color: #f5f5f5;
  box-shadow: none;
}

.el-input--small .el-input__wrapper,
.el-input--small .el-textarea__inner {
  border-radius: 6px !important;
  padding: 4px 8px;
}

.el-select .el-input.is-focus .el-input__wrapper {
  background-color: #ffffff;
}

.el-select.gray .el-input.is-focus .el-input__wrapper {
  background-color: #efefef;
  box-shadow: none !important;
}

.el-select .el-input__inner {
  font-size: 14px;
  font-style: normal;
  color: #000000 !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.el-select__tags .el-tag--info {
  background-color: #fff;
  color: #000;
  border-radius: 4px;
}

.el-select.is-error .el-input__wrapper {
  background-color: #ffe7e7 !important;
  box-shadow: 0 0 0 1px #f56c6c inset;
}

.el-select.is-error .el-input__wrapper .el-input__inner::placeholder {
  color: #f56c6c;
}

.el-select__label {
  font-size: 12px;
  line-height: 15px !important;
  font-weight: normal;
  color: #8d8d8d;
  margin-bottom: 4px !important;
}

.el-select__tags-text {
  color: #000 !important;
}

.el-select-dropdown__item {
  color: #000 !important;
}

.el-select-dropdown__item.selected:after {
  background-color: #000000 !important;
}

.el-tag .el-tag__close,
.el-tag .el-tag__close:hover {
  color: #000;
}
</style>
