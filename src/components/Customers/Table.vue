<template>
  <el-table :data="filterTableData" style="width: 100%">
   <el-table-column label="Id" prop="id"/>
    <el-table-column label="Date" prop="date" />
    <el-table-column label="Name" prop="name" />
    <el-table-column label="Adress" prop="address" />
    <el-table-column label="Email" prop="email" />
    <el-table-column label="Number" prop="number" />




    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          <img src="../../assets/icons/edit.png" alt="" class="editBtn">
          
        </el-button>
        <el-button size="small"  @click="handleDelete(scope.$index, scope.row)">
          <img src="../../assets/icons/delete.png" alt="" class="editBtn">
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
    background
    layout="prev, pager, next"
    :total="1000"
    class="mt-4"
  />

</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface User {
  id: number
  date: string
  name: string
  address: string
  email: string
  number:number
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    id :1234,
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    email:"suvdelivery@gmail.com",
    number:998901234567,
  },
  {
    id :1234,
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
    email:"suvdelivery@gmail.com",
    number:998901234567,


  },
  {
    id :1234,
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
    email:"suvdelivery@gmail.com",
    number:998901234567,

  },
  {
    id :1234,
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
    email:"suvdelivery@gmail.com",
    number:998901234567,


  },
]
</script>
<style>
.editBtn{
  width: 20px;
  height: 20px;
}
</style>