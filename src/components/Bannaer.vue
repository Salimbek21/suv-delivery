<script lang="ts">

</script>

<template>
    <div class="container">
        <div class="bannerNavbarParent">
            <h1 class="navbarParentP">
                banner
            </h1>
            <div class="navbarSearchParent">
                <img src="../assets/icons/Icon_Outline_search_banner.svg" alt="">
                <input type="text" placeholder="Search">
            </div>
        </div>
        <div class="navbarLine">
        </div>
        <div class="bannerBtnParent">
            <button class="bannerBtn" type="submit">
                Create banner
            </button>
        </div>
        <div class="bannerCardParent">
            <div class="bannerCard">
                <div class="bannerHeader">
                    <p class="bannerHeaderP">
                        Сделать основной
                    </p>
                    <img src="../assets/icons/star.svg" alt="">
                </div>
                <p class="bannerTitle">
                    Название <br> баннера
                </p>
                <button class="bannerBtn">
                    <img src="../assets/icons/img.svg" alt="" class="bannerBtnImg">
                </button>
            </div>
            <div class="bannerCard">
                <div class="bannerHeader">
                    <p class="bannerHeaderP">
                        Сделать основной
                    </p>
                    <img src="../assets/icons/star.svg" alt="">
                </div>
                <p class="bannerTitle">
                    Название <br> баннера
                </p>
                <button class="bannerBtn">
                    <img src="../assets/icons/img.svg" alt="" class="bannerBtnImg">
                </button>
            </div>
            <div class="bannerCard">
                <div class="bannerHeader">
                    <p class="bannerHeaderP">
                        Сделать основной
                    </p>
                    <img src="../assets/icons/star.svg" alt="">
                </div>
                <p class="bannerTitle">
                    Название <br> баннера
                </p>
                <button class="bannerBtn">
                    <img src="../assets/icons/img.svg" alt="" class="bannerBtnImg">
                </button>
            </div>
            <div class="bannerCard">
                <div class="bannerHeader">
                    <p class="bannerHeaderP">
                        Сделать основной
                    </p>
                    <img src="../assets/icons/star.svg" alt="">
                </div>
                <p class="bannerTitle">
                    Название <br> баннера
                </p>
                <button class="bannerBtn">
                    <img src="../assets/icons/img.svg" alt="" class="bannerBtnImg">
                </button>
            </div>
            <div class="bannerCard">
                <div class="bannerHeader">
                    <p class="bannerHeaderP">
                        Сделать основной
                    </p>
                    <img src="../assets/icons/star.svg" alt="">
                </div>
                <p class="bannerTitle">
                    Название <br> баннера
                </p>
                <button class="bannerBtn">
                    <img src="../assets/icons/img.svg" alt="" class="bannerBtnImg">
                </button>
            </div>
            <div class="bannerCard">
                <div class="bannerHeader">
                    <p class="bannerHeaderP">
                        Сделать основной
                    </p>
                    <img src="../assets/icons/star.svg" alt="">
                </div>
                <p class="bannerTitle">
                    Название <br> баннера
                </p>
                <button class="bannerBtn">
                    <img src="../assets/icons/img.svg" alt="" class="bannerBtnImg">
                </button>
            </div>
        </div>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    .container{
        display: flex;
        flex-direction: column;
        max-width: 1144px;
        width: 100%;
    }
    .navbarParentP{
        width: 83px;
        height: 30px;
        font: TT Interphases Pro;
        font-weight: 500;
        font-size: 24px;
        color: lightgray;
        text-transform: capitalize;
    }

    .bannerNavbarParent{
        display: flex;
        flex-direction: row;
        max-width: 1144px;
        width: 100%;
        justify-content: space-between;
    }
    .navbarSearchParent{
        display: flex;
        flex-direction: row;
    }
    .navbarLine{
        max-width: 1144px;
        width: 100%;
        height: 2px;
        border: 1px solid rgb(245, 245, 245);
        background-color: rgb(245, 245, 245);
        margin: 24px 0;
    }


    .bannerBtnParent{
        display: flex;
        flex-direction: row;
        max-width: 1144px;
        width: 100%;
    }

    .bannerBtn{
        max-width: 172px;
        width: 100%;
        height: 52px;
        background-color: black;
        color: white;
        border-radius: 10px;
    }

    .bannerCardParent{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1140px;
        gap: 20px;
    }
    .bannerCard{
        display: flex;
        flex-direction: column;
        max-width: 368px;
        width: auto;
        height: 224px;
        background-color: #F5F5F5;
        padding: 20px 24px;
        border-radius: 20px;
        gap: 12px;
    }
    .bannerHeader{
        display: flex;
        flex-direction: row;
        max-width: 320px;
        width: auto;
        justify-content: space-between;
        align-items: center;

    }
    .bannerHeaderP{
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
    }
    .bannerTitle{
        font-size: 24px;
        font-weight: 500;
    }
    .bannerBtn{
        display: flex;
        max-width: 320px;
        height: 64px;
        width: auto;
        background-color: white;
        justify-content: center;
        align-items: center;
    }
    .bannerBtnImg{
        width: 24px;
        height: 24px;
    }
</style>