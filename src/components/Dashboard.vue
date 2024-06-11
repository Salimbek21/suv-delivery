<template>
    <div class="dashboardParent">
        <div class="dashboardCard">
        <img src="../assets/11.svg" alt="" class="dashboardImg">
        <p class="dashboardP">
            Оставшиеся комплекты
        </p>
        <p class="dashboardStatus">
            400
        </p>
    </div>
    <div class="dashboardCard">
        <img src="../assets/11.svg" alt="" class="dashboardImg">
        <p class="dashboardP">
            Оставшиеся комплекты
        </p>
        <p class="dashboardStatus">
            400
        </p>
    </div>
    <div class="dashboardCard">
        <img src="../assets/11.svg" alt="" class="dashboardImg">
        <p class="dashboardP">
            Оставшиеся комплекты
        </p>
        <p class="dashboardStatus">
            400
        </p>
    </div>
    </div>
</template>

<script lang="ts">

</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.dashboardParent{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1144px;
    width: auto;
}
.dashboardCard {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    width:auto;
    height: 199px;
    padding: 24px;
    gap: 0px;
    opacity: 0px;
    border-radius: 15px;
    background: #F5F5F5;
}
.dashboardImg{
    width: 60px;
height: 60px;
gap: 0px;
opacity: 0px;
margin-bottom: 20px;

}
.dashboardP{
    font-family: TT Interphases Pro;
font-size: 18px;
font-weight: 600;
line-height: 22.5px;
text-align: left;
margin-bottom: 10px;
}
.dashboardStatus{
    font-family: TT Interphases Pro;
font-size: 30px;
font-weight: 600;
line-height: 37.5px;
text-align: left;

}

</style>