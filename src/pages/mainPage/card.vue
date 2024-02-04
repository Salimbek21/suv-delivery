<script setup lang="ts">

</script>

<template>
  <div class="mainCard">
    <div class="mainCardSlider">

      <div class="mainCardSlideOrder">
        <p class="orderTypes">
          Общие заказы
        </p>
        <img src="../../assets/icons/Frame 18.svg" alt="" srcset="" class="orderImg">
        <p class="orderNumbers">
          25,430<span>шт.</span>
        </p>
        <p class="orderTime">
          1 день назад
        </p>
      </div>
      <div class="mainCardSlideOrder">
        <p class="orderTypes">
          Активные заказы
        </p>
        <img src="../../assets/icons/actOrder.svg" alt="" srcset="" class="orderImg">
        <p class="orderNumbers">
          5,730<span>шт.</span>
        </p>
        <p class="orderTime">
          1 день назад
        </p>
      </div>
      <div class="mainCardSlideOrder">
        <p class="orderTypes">
          Выполненные заказы
        </p>
        <img src="../../assets/icons/doneOrder.svg" alt="" srcset="" class="orderImg">
        <p class="orderNumbers">
          13,210<span>шт.</span>
        </p>
        <p class="orderTime">
          1 день назад
        </p>
      </div>
      <div class="mainCardSlideOrder">
        <p class="orderTypes">
          Отмененный заказ
        </p>
        <img src="../../assets/icons/cancOrder.svg" alt="" srcset="" class="orderImg">
        <p class="orderNumbers">
          2,543<span>шт.</span>
        </p>
        <p class="orderTime">
          1 день назад
        </p>
      </div>
    </div>
    <div class="mainCardOrder">
      <div class="orderBottle">
        <img src="../../assets/icons/bottleO.svg" alt="">
        <div class="mainCardOrderP">
          <p class="mainCardOderPChild">
            Баклажкы
          </p>
          <p class="mainCardOderPChildSpan">
            в течение 24 часов
          </p>
        </div>
        <img src="../../assets/icons/bottle.svg" alt="" class="mainCardOrderImg">
        <p class="mainCardOrderPCount">
          430
          <span class="mainCardOrderPCountChild">шт</span>
        </p>
      </div>
      <div class="orderBottleSecond">
        <img src="../../assets/icons/bottleOrder.svg" alt="">
        <div class="mainCardOrderP">
          <p class="mainCardOderPChild">
            Заказы
          </p>
          <p class="mainCardOderPChildSpan">
            в течение 24 часов
          </p>
        </div>
        <img src="../../assets/icons/buy.svg" alt="" class="mainCardOrderImgBuy">
        <p class="mainCardOrderPCount">
          1,127
          <span class="mainCardOrderPCountChild">шт</span>
        </p>
      </div>

    </div>
  </div>
</template>



<style >
@media (min-width: 401px) {
  .mainCard{
    display: none;
  }
}

@media (max-width: 400px) {
  .mainCardSlider {
    display: flex;
    flex-direction: row;
    overflow: auto;
    gap: 10px;
  }

  .mainCardSlideOrder {
    width: 160px;
    height: 200px;
    border-radius: 24px;
    background: #F5F5F5;
    padding: 20px 35px 0 20px;
  }

  .orderTypes {
    color: #000;
    font-family: Gilroy;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .orderImg {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    margin: 15px 0 12px 25px;
  }

  .orderNumbers {
    color: #000;
    font-family: Gilroy;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 5px;
  }

  span {
    color: #000;
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .orderTime {
    color: #ABABAB;
    font-family: Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /* order card */
  .mainCardOrder {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .orderBottle {
    margin-top: 14px;
    display: flex;
    flex-direction: row;
    width: 353px;
    padding: 10px;
    height: 80px;
    flex-shrink: 0;
    gap: 15px;
    border-radius: 24px;
    background: linear-gradient(236deg, rgba(6, 87, 201, 0.77) 31.06%, #0657C9 102.92%);
  }

  .mainCardOderPChild {
    margin-top: 10px;
    color: #FFF;
    font-family: Gilroy;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .mainCardOderPChildSpan {
    color: #FFF;
    font-family: Gilroy;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .mainCardOrderPCount {
    margin-top: 14px;
    color: #FFF;
    text-align: right;
    font-family: Gilroy;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .mainCardOrderImg {
    width: 53px;
    height: 87px;
    flex-shrink: 0;
    margin-top: 7px;
    overflow: hidden;
  }

  .mainCardOrderImgBuy {
    display: flex;
    margin-top: 15px;
    width: 72px;
    height: 72px;
    padding: 7.499px 5.953px 5.704px 6px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    opacity: 0.15;
  }

  .orderBottleSecond {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
    width: 353px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 24px;
    background: linear-gradient(212deg, rgba(251, 84, 84, 0.74) 21.53%, #FB5454 121.69%);
  }

  .mainCardOrderPCountChild {
    color: #FFF;
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


}
</style>