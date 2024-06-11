<script lang="ts" setup>
const router = useRouter();
const permissions = localStorage.getItem("permissions");
const result = filterByPermission(menu, permissions);


function filterByPermission(menu: any, permissions: any) {
  return menu.filter((item: any) => permissions?.includes(item?.permission));
}

function toggleDropdown(event: any) {
  event.currentTarget.classList.toggle("opened");
  event.currentTarget.parentElement.classList.toggle("opened");
}
</script>

<template>
  <ul class="menu">
    <li class="cursor-pointer mb-[10px]"></li>
    <!-- Glavniy -->
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/' && 'active'"
        to="/"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconHome"></i>
        <p>Мониторинг</p>
      </RouterLink>
    </li>
    <!-- Mijozlar -->
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/customers' && 'active'"
        to="/customers"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDashboard"></i>
        <p>Мижозлар</p>
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/promocode' && 'active'"
        to="/promocode"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDashboard"></i>
        <p>promocode</p>
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/history' && 'active'"
        to="/history"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDashboard"></i>
        <p>history</p>
      </RouterLink>
    </li>
    
    <!-- Produkta -->
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/product' && 'active'"
        to="/product"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconProduct"></i>
        <p>Маҳсулотлар</p>
      </RouterLink>
    </li>
    <!-- Buyurtmalar -->
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/order' && 'active'"
        to="/order"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDownload"></i>
        <p>Буюртмалар</p>
      </RouterLink>
    </li>
    
    <!-- Менежерлар --> 
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/managers' && 'active'"
        to="/managers"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDashboard"></i>
        <p>Менежерлар</p>
      </RouterLink>
    </li>
    <!-- Шикастланганлар -->
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/damaged-property' && 'active'"
        to="/damaged-property"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDashboard"></i>
        <p>Шикастланганлар</p>
      </RouterLink>
    </li>

    <div v-for="(item, index) in result" :key="index">
      <ul
        class="subMenu"
        :class="router.currentRoute.value.path.includes(item.path) ? 'opened' : null"
        v-if="item.children"
      >
        <div class="subMenuToggle" @click="toggleDropdown($event)">
          <i class="menuIcon" :class="item?.icon"></i>
          <span>
            {{ item.name }}
          </span>
          <i class="arrowRightIcon"></i>
        </div>
        <div class="subMenuItems">
          <li v-for="(child, index) in item.children" :key="index">
            <RouterLink
              class="subMenuLink"
              :class="
                router.currentRoute.value.path.includes(child.path) ? 'active' : null
              "
              :to="child.path"
              w-full
              flex
              items-center
            >
              <span>
                {{ child.name }}
              </span>
            </RouterLink>
          </li>
        </div>

        <div class="subMenuToolTip">
          <li v-for="(child, index) in item.children" :key="index">
            <RouterLink
              :class="
                router.currentRoute.value.path.includes(child.path) ? 'active' : null
              "
              :to="child.path"
              w-full
              flex
              items-center
            >
              <span>
                {{ child.name }}
              </span>
            </RouterLink>
          </li>
        </div>
      </ul>

      <li class="menuItem" v-else>
        <RouterLink
          class="menuLink"
          :class="router.currentRoute.value.path.includes(item.path) ? 'active' : null"
          :to="item.path"
          w-full
          flex
          items-center
          v-if="!item.children"
        >
          <i class="menuIcon" :class="item.icon"></i>
          <span>
            {{ item.name }}
          </span>

          <div class="subMenuToolTip">
            <li>
              <RouterLink
                :class="
                  router.currentRoute.value.path.includes(item.path) ? 'active' : null
                "
                :to="item.path"
                w-full
                flex
                items-center
              >
                <span>
                  {{ item.name }}
                </span>
              </RouterLink>
            </li>
          </div>
        </RouterLink>
      </li>
    </div>
  </ul>
</template>

<style>
.menuItem {
  margin-bottom: 10px;
}

.menuLink {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  color: #0657c9;
  padding: 0 10px;
  border-radius: 10px;
  height: 44px;
  position: relative;
  transition: all 0.2s linear;
}
.menuItem > .menuLink > p {
  color: #444;
  text-align: center;
  font-family: "Gilroy";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
}

.menuLink:hover,
.menuLink.active {
  color: #fff;
  background-color: #0657c9;
}

.menuIcon {
  width: 28px;
  height: 28px;
  flex: none;
  margin-right: 10px;
  background-color: #444;
  transition: all 0.2s linear;
}

.menuLink:hover .menuIcon,
.menuLink.active .menuIcon {
  background-color: #fff;
}

/* <<<<<<<< WHY ????????????????   .menuLink:hover> p >>>>>>>>> */

.menuLink:hover > p,
.menuLink.active > p {
  color: #fff !important;
}

.menuIcon.iconDashboard {
  -webkit-mask: url("/src/assets/icons/menu/dashboard.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/dashboard.svg") no-repeat center/100%;
}

.menuIcon.iconReports {
  -webkit-mask: url("/src/assets/icons/menu/reports.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/reports.svg") no-repeat center/100%;
}
.menuIcon.iconProduct {
  -webkit-mask: url("/src/assets/icons/menu/product.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/product.svg") no-repeat center/100%;
}
.menuIcon.iconDownload {
  -webkit-mask: url("/src/assets/icons/menu/download.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/download.svg") no-repeat center/100%;
}
.menuIcon.iconHome {
  -webkit-mask: url("/src/assets/icons/menu/home.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/home.svg") no-repeat center/100%;
}

.menuIcon.iconRegistration {
  -webkit-mask: url("/src/assets/icons/menu/registration.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/registration.svg") no-repeat center/100%;
}

.menuIcon.iconRoles {
  -webkit-mask: url("/src/assets/icons/menu/roles.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/roles.svg") no-repeat center/100%;
}

.menuIcon.iconStaffs {
  -webkit-mask: url("/src/assets/icons/menu/staffs.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/staffs.svg") no-repeat center/100%;
}

.menuIcon.iconNotification {
  -webkit-mask: url("/src/assets/icons/menu/notification.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/notification.svg") no-repeat center/100%;
}

.menuIcon.iconDiscount {
  -webkit-mask: url("/src/assets/icons/menu/discounts.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/menu/discounts.svg") no-repeat center/100%;
}

/* sub menu */
.subMenu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
}

.subMenuToggle {
  position: relative;
  z-index: 4;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  color: #0657c9;
  height: 44px;
  width: 100%;
  padding: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  background-color: #fff;
  transition: all 0.2s linear;
}

.subMenuToggle:hover,
.subMenu.opened .subMenuToggle {
  background-color: #0657c9;
  color: #fff;
}

.subMenuToggle:hover .menuIcon,
.subMenu.opened .menuIcon {
  background-color: #fff;
}

/* .subMenu.opened .menuIcon,.menuItem > .menuLink > p {
  color: #fff;
} */

.subMenuItems {
  position: relative;
  width: 100%;
  padding: 0 20px 0 30px;
  z-index: 3;
  display: none;
}

.subMenu.opened .subMenuItems {
  display: block;
}

.subMenuItems::before {
  content: "";
  position: absolute;
  top: -10px;
  bottom: 0;
  left: 17px;
  height: calc(100% - 10px);
  width: 1px;
  background-color: #0657c9;
}

.subMenuItems a {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 14px;
  height: 32px;
  font-weight: normal;
  line-height: 16px;
  border-radius: 8px;
  margin-bottom: 4px;
  color: #8d8d8d;
  transition: all 0.2s linear;
}

.subMenuItems a:first-child {
  margin-top: 10px;
}

.subMenuItems a::before {
  content: "";
  position: absolute;
  left: 17px;
  width: 10px;
  height: 1px;
  background-color: #000;
}

.subMenuItems a:hover,
.subMenuItems a.active {
  background-color: #000;
  color: #ffffff;
}

.subMenuItems a:hover::before,
.subMenuItems a.active::before {
  background-color: #000;
}

.arrowRightIcon {
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
  -webkit-mask: url("/src/assets/icons/top.svg") no-repeat center/100%;
  -mask: url("/src/assets/icons/top.svg") no-repeat center/100%;
  background-color: #000;
  margin-left: auto;
  transform: rotate(90deg);
  transition: all 0.2s linear;
}

.subMenuToggle:hover .arrowRightIcon,
.subMenu.opened .arrowRightIcon {
  background-color: #fff;
}

.subMenu.opened .arrowRightIcon {
  transform: rotate(0deg);
}

body.sideBarClose .menuItem {
  margin-bottom: 20px;
}

body.sideBarClose .menuLink {
  display: flex;
  align-items: center;
  /* padding: 0px; */
  /* font-size: 0px; */
  /* padding: 6px; */
}

/* <<<<<<<<<< When the menu is collapsed, the menu text disappears >>>>>>>>>>> */

body.sideBarClose .menuLink > p {
  font-size: 0px;
}

body.sideBarClose .menuIcon {
  margin-right: 0px;
  background-color: #8d8d8d;
}

body.sideBarClose .subMenu {
  margin-bottom: 20px;
}

body.sideBarClose .subMenuToggle {
  padding: 0 13px;
  font-size: 0;
}

body.sideBarClose .subMenuToggle .arrowRightIcon {
  display: none;
}

body.sideBarClose .subMenu.opened .subMenuItems {
  display: none;
}

.subMenuToolTip {
  display: none;
  position: absolute;
  top: 0;
  opacity: 0;
  visibility: hidden;
  left: 0;
  margin-top: 0;
  margin-left: 55px;
  background-color: #fff;
  padding: 8px;
  width: 160px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);
  transition: all 0.2s linear;
}

body.sideBarClose .subMenuToolTip {
  display: block;
}

body.sideBarClose .subMenu:hover .subMenuToolTip,
body.sideBarClose .menuLink:hover .subMenuToolTip {
  opacity: 1;
  visibility: visible;
}

body.sideBarClose .subMenuToolTip li a {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 8px;
  margin-bottom: 4px;
  color: #404040;
  transition: all 0.2s linear;
}

body.sideBarClose .subMenuToolTip li:last-child a {
  margin-bottom: 0;
}

body.sideBarClose .subMenuToolTip li a:hover,
body.sideBarClose .subMenuToolTip li a.active {
  background-color: #000;
  color: #ffffff;
}

@media screen and (max-width: 600px) {
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 40px;
    background: rgba(245, 245, 245, 0.5);
    backdrop-filter: blur(20px);
    z-index: 1;
  }

  .cursor-pointer {
    display: none;
  }
  .menuItem {
    width: 25%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px !important;
  }
  .menuLink {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 0;
  }

  .menuIcon {
    display: flex;
    width: 30px;
    height: 30px;
    padding: 3.5px 3.507px;
    /* padding: 3.395px 2.628px 3.628px 2.872px; */
    margin-right: 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .iconHome {
    width: 27px;
    height: 29px;
  }

  .menuItem > .menuLink > p {
    color: #444;
    text-align: center;
    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  body.sideBarClose .menuLink > p {
    font-size: 16px;
  }

  .menuLink:hover,
  .menuLink.active {
    /* color: #5f1111!important; */
    background-color: unset;
  }
  .menuLink:hover > p,
  .menuLink.active > p {
    color: #0657c9 !important;
  }

  .menuLink:hover .menuIcon,
  .menuLink.active .menuIcon {
    background-color: #0657c9;
  }
}

@media screen and (max-width: 450px) {
  .menuIcon {
    display: flex;
    width: 26px;
    height: 26px;
    padding: 3px;
    /* padding: 3.395px 2.628px 3.628px 2.872px; */
    margin-right: 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .iconHome {
    width: 23px;
    height: 24px;
  }

  .menuItem > .menuLink > p {
    color: #444;
    text-align: center;
    font-family: "Gilroy";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}

@media screen and (max-width: 400px) {
  .menuItem {
    padding: 14px;
  }

  .menuLink {
    height: auto;
    gap: 5px;
  }

  /* Each icon's height, width and padding are given separately */

  .iconHome {
     /* width: 20.068px;
    height: 20px; */
    /* display: inline-block; */
    width: 24.068px;
height: 24px;
padding: 2px 2.507px;
   
  }

  .iconDownload {
    width: 24px;
height: 24px;
padding: 3.395px 2.628px 3.628px 2.872px;
  }

  .iconProduct {
    width: 24px;
height: 24px;
padding: 2.5px 3px 3px 3px;
  }

  .iconDashboard {
    width: 24px;
height: 24px;
padding: 3px;
  }

  .menuItem > .menuLink > p {
    font-size: 10px;
  }
}

@media screen and (max-width: 350px) {
  .menuItem {
    padding: 10px;
  }

  .menuLink {
    height: auto;
    gap: 5px;
  }

  .menuIcon {
    width: 16px;
    height: 16px;
    padding: 1px 1.507px;
  }
  .menuItem > .menuLink > p {
    font-size: 8px;
  }
}
</style>
