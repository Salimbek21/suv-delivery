<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="topBarLogo">
    <RouterLink class="siteLogoLink" to="/">
      <div class="siteLogo">
        <img src="../assets/icons/menu/siteLogo.svg" alt="siteLogo" />
      </div>
    </RouterLink>
    <RouterLink class="siteLogoLink" to="/">
      <div>
        <span>Delivery<span>Suv</span></span>
      </div>
    </RouterLink>
    <button class="siteNotification">
      <img src="../assets/icons/menu/notification.svg" alt="siteNotification" />
    </button>
  </div>
</template>

<style>
.topBarLogo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}

.siteLogo>img {
  width: 30px;
  height: 30px;
}

.siteLogoLink {
  display: flex;
}

.siteLogoLink > div > span {
  display: flex;
  align-items: center;
  color: #0657c9;
  text-align: center;
  font-family: 'Satoshi';
  font-size: 23px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: capitalize;
}

.siteLogoLink > div > span > span {
  color: #01033c;
}

.siteNotification {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background-color: #f5f5f5;
}

.siteNotification>img {
position: relative;
width: 30px;
height: 30px;
padding: 1.667px 2.917px;
color: #4444;
}

.siteNotification > img::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #b80808;
  fill: #fb5454;
  color: #fb5454;
  top: 0px;
  right: 0;
  z-index: 10;
}

@media screen and (max-width:350px) {
    .siteLogo>img {
  width: 25px;
  height: 25px;
}

.siteLogoLink > div > span {
  font-size: 18px;
}

.siteNotification {
  width: 35px;
  height: 35px;
}

.siteNotification>img {
width: 30px;
height: 30px;
}
}
</style>
