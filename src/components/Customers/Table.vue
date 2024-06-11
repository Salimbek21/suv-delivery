<template>
  <el-button @click="resetDateFilter">reset date filter</el-button>
  <el-button @click="clearFilter">reset all filters</el-button>
  <el-table ref="tableRef" row-key="id" :data="tableData" style="width: 100%">

    <el-table-column prop="id" label="ID" sortable width="80" />

    <el-table-column prop="phoneNum" label="Номер телефона" width="150" />

    <el-table-column prop="name" label="ФИО" width="220" />

    <el-table-column prop="status" label="Статус" width="120">
      <template #default="scope">
        <el-tag :type="scope.row.status === 'Подтверждено' ? 'success' : 'info'">
          {{ scope.row.status }}
        </el-tag>
      </template>
    </el-table-column>

    <el-table-column prop="creationDate" label="Дата создания" width="180" />

    <el-table-column prop="simType" label="Тип SIM" width="100" />

    <el-table-column prop="expirationDate" label="Дата истечения" width="180">
      <template #default="scope">
        <el-tag :type="getExpirationTagType(scope.row.expirationMinutes)">
          {{ scope.row.expirationMinutes > 0 ? '-' : '' }}{{ scope.row.expirationMinutes }} мин.
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
  <div class="demo-pagination-block">
    <div class="demonstration">Change page size</div>
    <el-pagination
      v-model:current-page="currentPage2"
      v-model:page-size="pageSize2"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="sizes, prev, pager, next"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TableColumnCtx, TableInstance } from 'element-plus'

interface User {
  id: number
  phoneNum: string
  name: string
  status: string
  creationDate: string
  simType: string
  expirationMinutes: number
}

const tableRef = ref<TableInstance>()


const resetDateFilter = () => {
  tableRef.value!.clearFilter(['date'])
}
const clearFilter = () => {
  tableRef.value!.clearFilter()
}

const getExpirationTagType = (minutes: number): string => {
  if (minutes > 60) {
    return 'success'
  } else if (minutes > 0) {
    return 'warning'
  } else {
    return 'danger'
  }
}

const tableData: User[] = [
  { 
    id: 321,
    phoneNum: "+998 20 002 22 12",
    name: 'Suleymonov Erkin Urunbaevich',
    status: 'Подтверждено',
    creationDate: '21.09.2023 / 16:45',
    simType: 'eSIM',
    expirationMinutes: 120
  },
  {
    id: 321,
    phoneNum: "+998 20 002 22 12",
    name: 'Suleymonov Erkin Urunbaevich',
    status: 'Подтверждено',
    creationDate: '21.09.2023 / 16:45',
    simType: 'eSIM',
    expirationMinutes: 72
  },
  {
    id: 321,
    phoneNum: "+998 20 002 22 12",
    name: 'Suleymonov Erkin Urunbaevich',
    status: 'Подтверждено',
    creationDate: '21.09.2023 / 16:45',
    simType: 'eSIM',
    expirationMinutes: -24
  }
]

// pagination

const currentPage2 = ref(5)
const pageSize2 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>


<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
