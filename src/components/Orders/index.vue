<script lang="ts" setup>
import { reactive, computed, ref, onMounted, onBeforeUnmount, watch } from "vue";
//>>>>>>>>>>  Scrolled Header
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
//>>>>>>>>>> End Scrolled Header

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const handleInput = () => {
  console.log("submit!");
};

// Load data from local storage when the component is mounted
onMounted(() => {
  const savedForm = localStorage.getItem("form");
  if (savedForm) {
    Object.assign(form, JSON.parse(savedForm));
  }
});

// Save data to local storage whenever it changes
watch(
  () => form,
  (newForm) => {
    localStorage.setItem("form", JSON.stringify(newForm));
  },
  { deep: true }
);

const loading = ref(true);

//>>>>> Information Table of customers and Filter system

const search = ref(localStorage.getItem('search') || ""); // Load search input from local storage
const originalTableData = [
  {
    name: "Abduqaxxorov Ilyos",
    status: "Успешно",
    state: "eSim->pSim",
    data: "27.09.2023 / 11:23",
  },
  {
    name: "Abduqaxxorov Xushnid Ilyosovich",
    status: "Успешно",
    state: "eSim->pSim",
    data: "27.09.2023 / 11:23",
  },
  {
    name: "Abduqaxxorov Xushnid Baxtiyorovich",
    status: "Успешно",
    state: "eSim->pSim",
    data: "27.09.2023 / 11:23",
  },
  {
    name: "Husanov Abdulloh Ilyosovich",
    status: "Успешно",
    state: "eSim->pSim",
    data: "27.09.2023 / 11:23",
  },
  {
    name: "Zoirjonov Xusniddin Ahmadjonovich",
    status: "Успешно",
    state: "eSim->pSim",
    data: "27.09.2023 / 11:23",
  },
  {
    name: "Ilyosova Xurshida Baxtiyorovna",
    status: "Успешно",
    state: "eSim->pSim",
    data: "27.09.2023 / 11:23",
  },
  {
    name: "Mirzarahimov Bobur",
    status: "Успешно",
    state: "eSim->pSim",
    data: "27.09.2023 / 11:23",
  },
  {
    name: "Dinara",
    status: "Успешно",
    state: "eSim->pSim",
    data: "27.09.2023 / 11:23",
  },
];

const tableData = ref([...originalTableData]);

const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

watch(search, (newSearch) => {
  if (!newSearch) {
    tableData.value = [...originalTableData]; // Reset to original data
  }
  localStorage.setItem('search', newSearch); // Save search input to local storage
  localStorage.setItem('filteredData', JSON.stringify(filterTableData.value)); // Save filtered data to local storage
});

onMounted(() => {
  const savedFilteredData = localStorage.getItem('filteredData');
  if (savedFilteredData) {
    tableData.value = JSON.parse(savedFilteredData);
  }
});
//>>>>> End Information Table of customers and Filter system
</script>

<template>
  <header :class="{ header: true, scrolled: isScrolled }">
    <h2>Инфо</h2>
    <div class="filterInpWrapper">
      <div class="searchInpWrapper">
        <i class="searchIcon" aria-hidden="true"> </i>
        <input v-model="search" type="search" placeholder="Поиск" />
      </div>
      <input type="button" value="фильтр" class="filterInput" />
    </div>
  </header>
  <div class="returnLink">
    <a href="/" class="return"><i class="returnIcon"></i> Вернуться назад</a>
  </div>
  <div class="containerForms">
    <div class="formWrapper">
      <el-form :model="form" label-width="auto">
        <h4 class="infoUserTitle">Информация о юзере</h4>
        <el-form-item class="infoUserInput">
          <label for="lpaCode" class="custom-label">LPA код</label>
          <el-input id="lpaCode" v-model="form.name" @click="handleInput" />
        </el-form-item>
        <div class="inputsWrapper">
          <el-form-item class="infoUserInput">
            <label for="iccid" class="custom-label">ICCID</label>
            <el-input id="iccid" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="ctn" class="custom-label">CTN</label>
            <el-input id="ctn" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="iccid-path" class="custom-label">ICCID (пустышка)</label>
            <el-input id="iccid-path" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="ctn-path" class="custom-label">CTN (пустышка)</label>
            <el-input id="ctn-path" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="simCard" class="custom-label">Тип SIM карты</label>
            <el-input id="simCard" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="ctn-prize" class="custom-label">Стоимость CTN</label>
            <el-input id="ctn-prize" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="trafic-plan" class="custom-label">Тарифный план</label>
            <el-input id="trafic-plan" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="status" class="custom-label">Статус</label>
            <el-input id="status" v-model="form.name" />
          </el-form-item>
        </div>

        <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item> -->
      </el-form>

      <el-form :model="form" label-width="auto">
        <h4 class="infoUserTitle">Замена номера</h4>
        <div class="radioSelect">
          <!-- <el-radio-group class="btnSimCard" v-model="radio1" >
      <el-radio-button label="eSIM → pSIM" value="pSIM" />
      <el-radio-button label="pSIM → eSIM" value="eSIM" />
    </el-radio-group> -->
          <button type="button" value="pSIM">eSIM → pSIM</button>
          <button type="button" value="eSIM">pSIM → eSIM</button>
        </div>

        <el-form-item class="infoUserInput">
          <label for="lpaCode" class="custom-label">Номер pSIM (ICCID)</label>
          <el-input id="lpaCode" v-model="form.name" />
        </el-form-item>

        <!-- <el-button type="primary" @click="onSubmit">Create</el-button> -->
        <button class="extraNumBtn">Изменить</button>
      </el-form>

      <el-form :model="form" label-width="auto">
        <div class="formTitleId">
          <h4 class="infoUserTitle">Паспортные данные</h4>
          <a href="/">Изменить данные</a>
        </div>
        <div class="inputsWrapper">
          <el-form-item class="infoUserInput">
            <label for="surname" class="custom-label">Фамилия</label>
            <el-input id="surname" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="name" class="custom-label">Имя</label>
            <el-input id="name" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="familyName" class="custom-label">Отчество</label>
            <el-input id="familyName" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="birthday" class="custom-label">Дата рождения</label>
            <el-input id="birthday" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="PINFL" class="custom-label">ПИНФЛ</label>
            <el-input id="PINFL" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="numID" class="custom-label">Серия паспорта</label>
            <el-input id="numID" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="givenData" class="custom-label">Дата выпуска</label>
            <el-input id="givenData" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="dateOfExpiry" class="custom-label">Дата истечения срока</label>
            <el-input id="dateOfExpiry" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="placeOfBirth" class="custom-label">Место рождения</label>
            <el-input id="placeOfBirth" v-model="form.name" />
          </el-form-item>
          <el-form-item class="infoUserInput">
            <label for="registration" class="custom-label">Прописка</label>
            <el-input id="registration" v-model="form.name" />
          </el-form-item>
        </div>

        <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item> -->
      </el-form>
    </div>

    <div class="skeletonWrapper">
      <el-skeleton :loading="loading" animated>
        <template #template>
          <div class="skeletons">
            <el-skeleton-item class="grid-item grid-item-large" />
            <el-skeleton-item class="grid-item" />
            <el-skeleton-item class="grid-item" />
            <el-skeleton-item class="grid-item" />
          </div>
        </template>
        <!-- <template #default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Delicious hamburger</span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <el-button text class="button">Operation button</el-button>
            </div>
          </div>
        </el-card>
      </template> -->
      </el-skeleton>
    </div>
  </div>

  <div class="infoSectionFooter">
    <div class="infoSectionBtns">
      <el-button> Взять на работу </el-button>
      <el-button> Одобрить </el-button>
      <el-button> Проверка оплаты </el-button>
      <el-button> Отказать </el-button>
    </div>

    <el-button class="downloadInfoBtn">
      <i class="downloadInfo"></i>
      Скачать договор
    </el-button>
  </div>

  <!-- >>>>>>>>>>>>>> Information Table -->
  <!-- <el-table :data="tableData" class="custom-table" style="width: 100%">
    <el-table-column prop="name" width="800"/>
    <el-table-column width="150">
      <template v-slot="props">
        <span class="status">{{ props.row.status }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="state" width="130"/>
    <el-table-column prop="data" width="150"/>
  </el-table> -->
  <!-- <el-table-column prop="data" label="Data"/> -->

  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column>
      <template v-slot="scope">
        <div class="flex-container">
          <div class="flex-item" style="width: 800px">
            {{ scope.row.name }}
          </div>
          <div class="flex-item" style="width: 150px">
            <span class="status">{{ scope.row.status }}</span>
          </div>
          <div class="flex-item" style="width: 130px">
            <span class="state">{{ scope.row.state }}</span>
          </div>
          <div class="flex-item" style="width: 150px">
            {{ scope.row.data }}
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
.header {
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #f5f5f5;
  background: rgb(255, 255, 255);
  padding-bottom: 18px;
  z-index: 1;
  transition: padding-top 0.3s;
}
.header.scrolled {
  padding-top: 40px;
}
header > h2 {
  color: rgb(0, 0, 0);
  font-family: "Inter";
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.81rem;
  letter-spacing: 0%;
  text-align: left;
}
.filterInpWrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}
.searchInpWrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.63rem;
  box-sizing: border-box;
  border: 0.06rem solid rgb(245, 245, 245);
  border-radius: 0.5rem;
  background: rgb(255, 255, 255);
}
.searchInpWrapper input {
  outline: none;
  line-height: normal;
}
.searchIcon {
  width: 1.13rem;
  height: 1.13rem;
  margin-right: 10px;
  background: rgb(0, 0, 0);
  -webkit-mask: url("/src/assets/icons/companentsIcons/search.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/companentsIcons/search.svg") no-repeat center/100%;
}
.filterInpWrapper .filterInput {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.63rem 1.3rem;
  border-radius: 0.5rem;
  background: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19rem;
  letter-spacing: 0%;
  text-align: left;
}
.returnLink {
  padding-top: 12px;
  padding-bottom: 10px;
}
.return {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.63rem;
  color: rgb(0, 0, 0);
  font-family: "Inter";
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.94rem;
  letter-spacing: 0%;
  text-align: left;
}
.returnIcon {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 10px;
  background: rgb(0, 0, 0);
  -webkit-mask: url("/src/assets/icons/arrow-sm-left.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/arrow-sm-left.svg") no-repeat center/100%;
}

.containerForms {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 30px;
}

.formWrapper {
  /* width: 100%; */
  width: 740px;
  height: 762px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 9px;
  padding-right: 4px;
  /* flex: 1 1 736px;  */
}

.formWrapper::-webkit-scrollbar {
  width: 8px;
}

/* Track */
.formWrapper::-webkit-scrollbar-track {
  border-radius: 2.94rem;
  background: rgb(245, 245, 245);
}

/* Handle */
.formWrapper::-webkit-scrollbar-thumb {
  border-radius: 2.94rem;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0.5;
}

/* Handle on hover */
.formWrapper::-webkit-scrollbar-thumb:hover {
  background: rgb(141, 141, 141);
}

.el-form {
  max-width: 45.13rem;
  max-height: 27.19rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.25rem 1rem 1.25rem 1rem;
  box-sizing: border-box;
  border: 0.13rem solid rgb(245, 245, 245);
  border-radius: 0.63rem;
}

.infoUserTitle {
  color: rgb(0, 0, 0);
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.19rem;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 16px;
}

.infoUserInput {
  width: 100%;
  margin-bottom: 16px;
}
.infoUserInput .el-input:nth-child(n) {
  height: 2.5rem;
  border: 0.06rem solid rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2), rgb(141, 141, 141);
  border-radius: 0.38rem;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-family: "Inter";
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.94rem;
  letter-spacing: 0%;
  text-align: left;
}

.custom-label {
  color: rgb(141, 141, 141);
  font-family: "Inter";
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.94rem;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 4px;
}

.inputsWrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two equal-width columns */
  column-gap: 26px;
}

.radioSelect {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 4px;
  background: rgb(245, 245, 245);
  gap: 2px;
  margin-bottom: 16px;
}

.radioSelect > button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.406rem 0.964rem;
  border-radius: 0.13rem;
  background: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  font-family: "Inter";
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.06rem;
  letter-spacing: 0%;
  text-align: left;
}

/* .btnSimCard {
  width: 100%;
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 2px;
background: rgb(209, 46, 46) !important;
} */

/* .btnSimCard>.el-radio-button {
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.38rem 1.25rem 0.38rem 1.25rem;
border-radius: 0.13rem;
border: none !important;
background: rgb(255, 255, 255);
} */

.extraNumBtn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.67rem 3.5rem;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.38rem;
  color: rgb(141, 141, 141);
  font-family: "Inter";
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.94rem;
  letter-spacing: 0%;
  text-align: left;
}

.formTitleId {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

.formTitleId > a {
  color: rgb(33, 150, 83);
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19rem;
  letter-spacing: 0%;
  text-align: right;
}

.skeletonWrapper {
  /* box-sizing: border-box;
  flex: 1 1 auto; */
  /* width:100%; */
  width: 100%;
  max-width: 610px;
}

.skeletons {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  row-gap: 18px;
  padding: 0 0 0 24px;
}

.grid-item {
  height: 100px;
  border-radius: 0.63rem;
  background: rgb(245, 245, 245);
}
.grid-item-large {
  width: 100%;
  height: 400px;
  grid-column: span 3;
}

/* >>>>>>>>>> Component buttons for getting Information at the bottom  */

.infoSectionFooter {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  right: 20px;
  left: 20px;
  bottom: 10px;
  padding: 22px 24px;
  border-radius: 1rem;
  background: #f9f9f9;
  z-index: 2;
  transition: all 0.2s linear;
  /* margin-left: 256px; */
  margin-right: 0px;
}

body.sideBarClose .infoSectionFooter {
  position: sticky;
  /* margin-left: 95px; */
  background-color: #f9f9f9;
  z-index: 2;
}

.infoSectionBtns {
  max-width: 805px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.infoSectionBtns > .el-button {
  padding: 16px 36px 16px 36px;
  border-radius: 6px;
  background: rgb(82, 200, 97);
  color: rgb(255, 255, 255);
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19rem;
  letter-spacing: 0%;
  text-align: left;
}

.infoSectionBtns > .el-button:nth-child(3) {
  box-sizing: border-box;
  border: 0.06rem solid rgb(0, 0, 0);
  border-radius: 0.38rem;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);
}
.infoSectionBtns > .el-button:nth-child(4) {
  border-radius: 0.38rem;
  background: rgb(245, 224, 224);
  color: rgb(251, 35, 44);
}

.downloadInfoBtn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.63rem 1.5rem 0.63rem 1.5rem;
  border-radius: 0.63rem;
  background: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19rem;
  letter-spacing: 0%;
  text-align: left;
}
.downloadInfo {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 10px;
  background-color: #444;
  transition: all 0.2s linear;
  -webkit-mask: url("/src/assets/icons/companentsIcons/download.svg") no-repeat
    center/100%;
  -mask: url("/src/assets/icons/companentsIcons/download.svg") no-repeat center/100%;
}

.status {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1rem 0.25rem 1rem;
  margin: 18px 0;
  border-radius: 6.25rem;
  background: rgb(228, 240, 230);
  color: rgb(82, 200, 97);
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19rem;
  letter-spacing: 0%;
  text-align: left;
}

.state {
  /* display: flex;
flex-direction: row;
justify-content: center;
align-items: center; */
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-radius: 6.25rem;
  background: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  font-family: "Inter";
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.94rem;
  letter-spacing: 0%;
  text-align: left;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-item {
  padding: 10px;
}
</style>
