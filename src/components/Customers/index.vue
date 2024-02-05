<script lang="ts" setup>


// <<<<<<<<<<<<<  Search  Table with custom header in Element-Plus >>>>>>>>>>>>>>>>
import { computed, ref } from 'vue'
interface User {
  date: string
  name: string
  address: string
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
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

// <<<<<<<<<<<<<<   Filter Custom template in Element-plus  >>>>>>>>>>>>>>>
import { onMounted  } from 'vue'
import { Search,  Edit,CircleClose} from '@element-plus/icons-vue'

interface LinkItem {
  value: string
  link: string
}

const state = ref('')
const links = ref<LinkItem[]>([])

const querySearch = (queryString: string, cb) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value
  // call callback function to return suggestion objects
  cb(results)
}
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}
const handleSelect = (item: LinkItem) => {
  console.log(item)
}

const handleIconClick = (ev: Event) => {
  console.log(ev)
}

onMounted(() => {
  links.value = loadAll()
})


//  <<<<<<<<<  Min price Remote search in element-plus  >>>>>>>>>>>


// import { onMounted, ref } from 'vue'

const state2 = ref('')

interface LinkItem {
  value: string
  link: string
}

const links2 = ref<LinkItem[]>([])

const loadAll2 = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/' },
    { value: 'cooking', link: 'https://github.com/ElemeFE' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE' },
    { value: 'vuex', link: 'https://github.com/vuejs' },
    { value: 'vue-router', link: 'https://github.com/vuejs' },
    { value: 'babel', link: 'https://github.com/babel' },
  ]
}

let timeout: ReturnType<typeof setTimeout>
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links2.value.filter(createFilter(queryString))
    : links2.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter2 = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect2 = (item: Record<string, any>) => {
  console.log(item)
}

onMounted(() => {
  links2.value = loadAll2()
})



// <<<<<<<<<<<<<<   Max price   >>>>>>>>>>>>>>>>>
// const state2 = ref('')

// interface LinkItem {
//   value: string
//   link: string
// }

// const links2 = ref<LinkItem[]>([])

// const loadAll2 = () => {
//   return [
//     { value: 'vue', link: 'https://github.com/vuejs/vue' },
//     { value: 'element', link: 'https://github.com/' },
//     { value: 'cooking', link: 'https://github.com/ElemeFE' },
//     { value: 'mint-ui', link: 'https://github.com/ElemeFE' },
//     { value: 'vuex', link: 'https://github.com/vuejs' },
//     { value: 'vue-router', link: 'https://github.com/vuejs' },
//     { value: 'babel', link: 'https://github.com/babel' },
//   ]
// }

// let timeout: ReturnType<typeof setTimeout>
// const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
//   const results = queryString
//     ? links2.value.filter(createFilter(queryString))
//     : links2.value

//   clearTimeout(timeout)
//   timeout = setTimeout(() => {
//     cb(results)
//   }, 3000 * Math.random())
// }
// const createFilter2 = (queryString: string) => {
//   return (restaurant: LinkItem) => {
//     return (
//       restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
//     )
//   }
// }

// const handleSelect2 = (item: Record<string, any>) => {
//   console.log(item)
// }

// onMounted(() => {
//   links2.value = loadAll2()
// })

//  <<<<<<<<<<<<<< Select options Option filtering in Element-plus >>>>>>>>>>>

import { ref } from 'vue'
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

  
  <template>
    <header class="filterHeader">
    
    <div class="container filterationTitleContainer"><span class="filterTitle">Filter</span></div>
    
        <nav class="filterNavbar">
        <div class="container filterationNavContainer">
   <!-- <<<<<<<<<<<<<  Search  Table with custom header in Element-Plus  >>>>>>>>>>>>> -->
        <div><p>поиск</p><el-input v-model="search" :fetch-suggestions="querySearch" class="searchInput"  :prefix-icon="Search" /></div>  
   <!-- <<<<<<<<<<<<<<<  Filter Custom template in Element-plus >>>>>>>>>>>>>>>> -->
          <div>
          <p>поиск</p>
          <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearch"
    popper-class="my-autocomplete"
    :prefix-icon="Search"
    @select="handleSelect"
  >
    <template #suffix>
      <!-- <el-icon class="el-input__icon" @click="handleIconClick">
        <edit />
      </el-icon> -->
    </template>
    <template #default="{ item }">
      <div class="value">{{ item.value }}</div>
      <span class="link">{{ item.link }}</span>
    </template>
         </el-autocomplete>
  </div>  
  <!-- <<<<<<<<<<<<<<<   Min price Remote search in element-plus >>>>>>>>>>>>>>>> -->
 <div><p>мин цена</p><el-autocomplete
    v-model="state2"
    :fetch-suggestions="querySearchAsync"
    @select="handleSelect2"
  /></div> 
  <!-- <<<<<<<<<<<<<<<   Max price Remote search in element-plus >>>>>>>>>>>>>>>> -->
  <div><p>мaкс цена</p><el-autocomplete
    v-model="state2"
    :fetch-suggestions="querySearchAsync"
    @select="handleSelect2"
  /></div>
   <!-- <<<<<<<<<<<<<< Select options  Option filtering in Element-plus >>>>>>>>>>> -->

  <div>
  <p>статус</p>
  <el-select
    v-model="value"
    filterable
    placeholder="статус виберита"
    style="width: 140px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  </div>

  <div>
  <p>скидки</p>
  <el-select
    v-model="value"
    filterable
    placeholder="статус виберита"
    style="width: 140px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  </div>

  <div>
  <p>дилеры</p>
  <el-select
    v-model="value"
    filterable
    placeholder="дилер виберита"
    style="width: 240px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  </div>

  <div>
  <p>категории</p>
  <el-select
    v-model="value"
    filterable
    placeholder="категория виберита"
    style="width: 220px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  </div>

  <div>
  <p>под категории</p> 
  <el-select
    v-model="value"
    filterable
    placeholder="категория виберита"
    style="width: 140px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  </div>
 
         </div>
        </nav>
        
    <div class="container filterationBtnContainer">  
      <el-button type="danger" :icon="CircleClose" size="small">сбросит</el-button>
      <el-button type="primary" :icon="Search" size="small">поиск</el-button>
    </div>
       
    </header>
  </template>


<style>
.content{
  margin-left: 0;
  padding: 0;
}
.filterHeader {
 /* position: relative;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px  0;*/
  margin:0;
  margin-left: 0px;
  background-color: #f0f3f5;
   border-top: 1px solid #e7e9eb;
  border-bottom: 1px solid #e7e9eb;
}

.container {
   width: 97%;
   margin: 0 auto;
}

.filterationTitleContainer,.filterationBtnContainer {
  padding: 10px 0;
 
}

.filterTitle {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 0;
}

.filterNavbar {
  width: 100%;
  padding: 10px 0 20px;
  background-color: #fff;
  border-top: 1px solid #e7e9eb;
  border-bottom: 1px solid #e7e9eb;
}

.filterationNavContainer {
   display: flex;
  justify-content: space-between;
  gap: 15px;
}

.filterationNavContainer div p {
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  margin-bottom: 5px;
  color: #828486;
}

.searchInput {
  width:auto;
}

.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>

