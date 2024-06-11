<template>
    <container>
        <header class="header">
            <h1 class="title">Промокоды</h1>
            <div class="search">
                <img src="../assets/search.svg" alt="">
                <input type="text" placeholder="Search">
            </div>

        </header>
        <main>
            <div class="formParent" >
               <div  class="formChild">
                <div>
                <p class="promoFormP">
                    Кодовое слово
                </p>
                <el-form-item>
                    <el-input v-model="kodovoeSlovo" placeholder="Кодовое слово"></el-input>
                </el-form-item>
               </div>
                <div><p class="promoFormP">
                    Количество
                </p>
                <el-form-item>
                    <el-input v-model="kolichestvo" placeholder="Количество"></el-input>
                </el-form-item></div>
                
                <el-form-item>
                    <el-button type="primary" @click="generate" class="addButon">Сгенерировать</el-button>
                </el-form-item>
               </div>
                <div class="pagination">
                    <button class="paginationButton"> <</button>
                    <button class="paginationButton">today</button>
                    <button class="paginationButton"> ></button>
                </div>
               
                
            </div>

            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="fio" label="ФИО" width="180"></el-table-column>
                <el-table-column prop="date" label="Дата" width="180"></el-table-column>
                <el-table-column prop="quantity" label="Кол-во" width="100"></el-table-column>
                <el-table-column prop="code" label="Кодовое слово" width="180"></el-table-column>
                <el-table-column label="Файл / Скачать">
                    <template #default="scope">
                        <el-link :href="scope.row.fileUrl" target="_blank">{{ scope.row.fileName }}</el-link>
                    </template>
                </el-table-column>
            </el-table>
        </main>
    </container>
</template>
  
<script>
export default {
    data() {
        return {
            kodovoeSlovo: '',
            kolichestvo: '',
            tableData: [
                {
                    fio: 'Abduqaxxorov Xushnid',
                    date: '7.11.2023',
                    quantity: 33,
                    code: 'MyID',
                    fileName: 'myid_33.docs',
                    fileUrl: '#'
                },
                {
                    fio: 'Abduqaxxorov Xushnid',
                    date: '6.11.2023',
                    quantity: 120,
                    code: 'MBro',
                    fileName: 'mbro_120.docs',
                    fileUrl: '#'
                }
            ]
        };
    },
    methods: {
        generate() {
            const newEntry = {
                fio: 'Abduqaxxorov Xushnid',
                date: new Date().toLocaleDateString(),
                quantity: this.kolichestvo,
                code: this.kodovoeSlovo,
                fileName: `${this.kodovoeSlovo.toLowerCase()}_${this.kolichestvo}.docs`,
                fileUrl: '#'
            };
            this.tableData.push(newEntry);
            this.kodovoeSlovo = '';
            this.kolichestvo = '';
        }
    }
};


</script>
  
<style>
.search {
    display: flex;
    flex-direction: row;
    width: Fixed (200px)px;
    height: Fixed (38px)px;
    padding: 10px 0px 0px 0px;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid #F5F5F5;
    opacity: 0px;
    align-items: center;
    justify-content: center;

}
.title{
font-family: TT Interphases Pro;
font-size: 24px;
font-weight: 500;
line-height: 30px;
text-align: left;

}

.promo-form {
   display: flex;
   flex-direction: row;
   gap: 16px;
   align-items: end;
}
.promoFormP{
font-family: TT Interphases Pro;
font-size: 12px;
font-weight: 400;
line-height: 15px;
text-align: left;
    color: #8D8D8D;
}

.header {
    display: flex;
    flex-direction: row;
    width: Fixed (1, 144px)px;
    height: Hug (38px)px;

    gap: 0px;
    justify-content: space-between;
    opacity: 0px;

}
.formChild{
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: end;
}
.addButon{
    width: Hug (186px)px;
height: Fixed (40px)px;
padding: 16px 36px 16px 36px;
gap: 10px;
border-radius: 6px ;
opacity: 0px;
background-color: #E4F0E6;
border: #E4F0E6;
color: #8D8D8D;
}
.formParent{
    max-width: 1000p;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.el-main {
    padding: 20px;
}

.el-table th,
.el-table td {
    text-align: center;
}
.pagination{
    display: flex;
    flex-direction: row;
    gap: 10px;

}
.paginationButton{
    max-width: 200px;
gap: 2px;
opacity: 0px;
background-color:  #F5F5F5;
border-radius: 5px;
padding: 6px 10px;
;

}

</style>
  