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

<style lang="scss">
.table_all_container {
  @media (max-width: 799px) {
    margin-left: 0;
  }
  @media (max-width: 600px) {
    margin-left: 0;
    width: 100%;
  }
}

.table_title_item {
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 1440px) {
    font-family: Gilroy;
    font-size: 35px;
    font-weight: 800;
    line-height: 25px;
  }
  @media (max-width: 1024px) {
    font-family: Gilroy;
    font-size: 28px;
    font-weight: 700;
    line-height: 20px;
  }
}

.table_wrap {
  width: 100%;
  margin: auto;
  margin-top: 12px;
  font-family: Gilroy;
  font-size: 15px;
  line-height: 25px;
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
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(6, 87, 201, 1);
  @media (max-width: 1440px) {
    font-family: Gilroy;
    font-size: 25px;
    font-weight: 800;
    line-height: 25px;
  }
  @media (max-width: 1024px) {
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 700;
    line-height: 18px;
  }
}

.table_title_btn:hover {
  color: rgba(0, 0, 156, 0.901);
}

.table_row {
  text-align: center;
}

.table_row th {
  background-color: #ddd;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;

  padding: 10px;
  @media (max-width: 1440px) {
    font-size: 21px;
    font-weight: 800;
    line-height: 13px;
  }
  @media (max-width: 1024px) {
    font-size: 17px;
    font-weight: 700;
    line-height: 13px;
  }
}

.table_row th:nth-child(1) {
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;

  border-top-left-radius: 8px;
  @media (max-width: 1440px) {
    font-size: 21px;
    font-weight: 800;
    line-height: 13px;
    border-top-left-radius: 12px;
  }
  @media (max-width: 1024px) {
    font-size: 17px;
    font-weight: 800;
    line-height: 13px;
    border-top-left-radius: 10px;
  }
}

.table_row th:nth-child(4) {
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;

  border-top-right-radius: 8px;
  @media (max-width: 1440px) {
    font-size: 21px;
    font-weight: 800;
    line-height: 13px;
    border-top-right-radius: 12px;
  }
  @media (max-width: 1024px) {
    font-size: 17px;
    font-weight: 800;
    line-height: 13px;
    border-top-right-radius: 10px;
  }
}

.table_row td {
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  border-bottom: 1px solid rgba(118, 118, 118, 0.708);
  font-weight: 600;
  padding: 20px;
  @media (max-width: 1440px) {
    font-family: Gilroy;
    font-size: 22px;
    font-weight: 800;
    line-height: 20px;
  }
  @media (max-width: 1024px) {
    font-family: Gilroy;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
  }
}

/* ------>Order table sty */

.container_new_order {
  width: 100%;
}

.order_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}

.order_title p {
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 1440px) {
    font-family: Gilroy;
    font-size: 30px;
    font-weight: 800;
    line-height: 30px;
  }
  @media (max-width: 1024px) {
    font-family: Gilroy;
    font-size: 25px;
    font-weight: 700;
    line-height: 25px;
  }
}

.order_title button {
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(6, 87, 201, 1);
  @media (max-width: 1440px) {
    font-family: Gilroy;
    font-size: 22px;
    font-weight: 800;
    line-height: 20px;
  }
  @media (max-width: 1024px) {
    font-family: Gilroy;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
  }
}

.order_title button:hover {
  font-size: 22px;
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
  justify-content: space-between;
  border-radius: 15px;
  /* background-color: #ddd; */
  background: linear-gradient(0deg, #f5f5f5, #f5f5f5);
}

.order_list li {
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  padding: 20px;
  @media (max-width: 1440px) {
    font-family: Gilroy;
    font-size: 26px;
    font-weight: 800;
    line-height: 30px;
  }
  @media (max-width: 1024px) {
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
  }
}

.order_list li:nth-child(1) {
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  @media (max-width: 1440px) {
    font-family: Gilroy;
    font-size: 26px;
    font-weight: 800;
    line-height: 30px;
  }
  @media (max-width: 1024px) {
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
  }
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

  @media (max-width: 1440px) {
    width: 100px;
    height: 50px;
  }
  @media (max-width: 1024px) {
    width: 90px;
    height: 50px;
  }
}

.order_buy_icon p {
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 1440px) {
    font-family: Gilroy;
    font-size: 22px;
    font-weight: 800;
    line-height: 20px;
  }
  @media (max-width: 1024px) {
    font-family: Gilroy;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
  }
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
  @media (max-width: 1440px) {
    width: 100px;
    height: 50px;
  }
  @media (max-width: 1024px) {
    width: 90px;
    height: 50px;
  }
}

.order_barrel_icon p {
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 1440px) {
    font-family: Gilroy;
    font-size: 22px;
    font-weight: 800;
    line-height: 20px;
  }
  @media (max-width: 1024px) {
    font-family: Gilroy;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
  }
}

.order_barrel_icon li {
  padding: 0;
}
</style>
