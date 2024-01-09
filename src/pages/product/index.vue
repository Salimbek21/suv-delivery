<script setup lang="ts">
import axios from 'axios';
import { ref, watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';

const arrData: any = ref([])

// const arrData: any = {
//   name: 'John',
//   age: 12
// }

function changeObj() {
  //   userName.value.age = 25
}

// watch(userName, () => {
//   console.log('mount')
// })

onBeforeMount(() => {
  console.log('mount')
    axios.get('https://api.brandstore.uz/api/categories').then((r)=>{
        console.log(r,"res")
        arrData.value = r.data.data
    })
})

// console.log(arrData.value, 'ar')
</script>

<template>
  <h3 class="title">First Vue</h3>
  <!-- {{ arrData }} -->
  <div v-for="item in arrData" :key="item">
    {{ item.name }}
  </div>

  <!-- <button @click="changeObj">clicked</button> -->
</template>

<style>
.title {
  font-size: 20px;
  font-weight: 800;
}
</style>
