<script setup lang="ts"></script>

<template>
  <div class="table_all_container">
    <div class="table_wrap">
      <div class="table_title">
        <p class="table_title_item">Доступные продукты</p>
        <button class="table_title_btn">Посмотреть все</button>
      </div>

      <table class="table">
        <tr class="table_row">
          <th>ID</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Цена</th>
        </tr>
        <tr class="table_row">
          <td>1</td>
          <td>Suv 18.9 L</td>
          <td>74</td>
          <td>115 000 сум</td>
        </tr>
        <tr class="table_row">
          <td>2</td>
          <td>Suv 11 L</td>
          <td>23</td>
          <td>75 000 сум</td>
        </tr>
        <tr class="table_row">
          <td>3</td>
          <td>Suv 10.5 L</td>
          <td>4</td>
          <td>72 000 сум</td>
        </tr>
        <tr class="table_row">
          <td>4</td>
          <td>Suv 3.5 L</td>
          <td>12</td>
          <td>55 000 сум</td>
        </tr>
        <tr class="table_row">
          <td>5</td>
          <td>Suv 5.5 L</td>
          <td>23</td>
          <td>255 000 сум</td>
        </tr>
      </table>
    </div>
    <div class="container_new_order">
      <div class="oder_wrap">
        <div class="order_wrap_list">
          <div class="order_title">
            <p>Новые заказы</p>
            <button>Посмотреть все</button>
          </div>
          <ul class="order_list">
            <li>Мирзо Улугбек</li>
            <div class="order_list_itm_wrap">
              <div class="order_buy_icon">
                <li>
                  <img src="../assets/Buy.svg" />
                  <p>48</p>
                </li>
              </div>
              <div class="order_barrel_icon">
                <li>
                  <img src="../assets/BarrelIcon.svg" />
                  <p>12</p>
                </li>
              </div>
            </div>
          </ul>
          <ul class="order_list">
            <li>Чиланзар</li>
            <div class="order_list_itm_wrap">
              <div class="order_buy_icon">
                <li>
                  <img src="../assets/Buy.svg" />
                  <p>48</p>
                </li>
              </div>
              <div class="order_barrel_icon">
                <li>
                  <img src="../assets/BarrelIcon.svg" />
                  <p>12</p>
                </li>
              </div>
            </div>
          </ul>
          <ul class="order_list">
            <li>Алмазар</li>
            <div class="order_list_itm_wrap">
              <div class="order_buy_icon">
                <li>
                  <img src="../assets/Buy.svg" />
                  <p>48</p>
                </li>
              </div>
              <div class="order_barrel_icon">
                <li>
                  <img src="../assets/BarrelIcon.svg" />
                  <p>12</p>
                </li>
              </div>
            </div>
          </ul>
          <ul class="order_list">
            <li>Мирабад</li>
            <div class="order_list_itm_wrap">
              <div class="order_buy_icon">
                <li>
                  <img src="../assets/Buy.svg" />
                  <p>48</p>
                </li>
              </div>
              <div class="order_barrel_icon">
                <li>
                  <img src="../assets/BarrelIcon.svg" />
                  <p>12</p>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style long="scss">
.table_title_item {
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  text-align: left;
}

.table_wrap {
  width: 100%;
  margin: auto;
  margin-top: 20px;
}

.table {
  margin: auto;
  width: 95%;
}

.table_title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 10px;
  width: 95%;
  height: 25px;
}

.table_title_btn {
  font-size: 15px;
  color: blue;
}

.table_title_btn:hover {
  color: rgba(0, 0, 156, 0.901);
}

.table_row {
  text-align: center;
}

.table_row th {
  background-color: #ddd;
  padding: 10px;
}

.table_row th:nth-child(1) {
  border-top-left-radius: 8px;
}

.table_row th:nth-child(4) {
  border-top-right-radius: 8px;
}

.table_row td {
  border-bottom: 1px solid rgba(118, 118, 118, 0.708);
  font-weight: 600;
  padding: 20px;
}

/* ------>Order table sty */
.container_new_order {
  width: 100%;
}

.order_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.order_title p {
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
}

.order_title button {
  font-size: 15px;
  color: blue;
}

.order_title button:hover {
  font-size: 15px;
  color: rgba(0, 0, 156, 0.901);
}

.order_wrap_list {
  width: 95%;
  margin: auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.order_list {
  height: 70px;
  display: flex;
  align-items: left;
  justify-content: space-between;
  border-radius: 15px;
  /* background-color: #ddd; */
  background: linear-gradient(0deg, #f5f5f5, #f5f5f5);
}

.order_list li {
  padding: 20px;
}

.order_list li:nth-child(1) {
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}

.order_list_itm_wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
}

.order_list_itm_wrap li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.order_buy_icon {
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(251, 84, 84, 0.05);
  color: #fb5454;
  border-radius: 14px;
}
.order_buy_icon li {
  padding: 0;
}

.order_barrel_icon {
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(6, 87, 201, 0.05);
  color: #0657c9;
  border-radius: 14px;
}

.order_barrel_icon li {
  padding: 0;
}
</style>
