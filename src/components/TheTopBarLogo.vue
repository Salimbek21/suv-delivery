<script setup lang="ts">
// const router = useRouter();
</script>

<template>
  <div class="topBarLogo">
    <RouterLink class="siteLogoLink" to="/">
      <div class="siteLogo">
        <img src="../assets/logoSite.svg" alt="siteLogo" />
      </div>
    </RouterLink>
    <RouterLink class="siteLogoLink" to="/">
      <div>
        <span>Delivery<span>Suv</span></span>
      </div>
    </RouterLink>
    <button class="siteNotification">
      <span
        ><img
          class="logoSiteNotification"
          src="../assets/logoNotification.svg"
          alt="siteNotification"
      /></span>
    </button>
  </div>
</template>

<style>
.topBarLogo {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 20px;
  border-radius: 0px 0px 14px 14px;
}

.siteLogoLink {
  display: flex;
}
.siteLogo > img {
  width: 30px;
  height: 32px;
}

.siteLogoLink > div > span {
  display: flex;
  align-items: center;
  color: #0657c9;
  text-align: center;
  font-family: "Satoshi";
  font-size: 26px;
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
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  background-color: #f5f5f5;
}

.logoSiteNotification {
  width: 20.167px;
  height: 22.667px;
  flex-shrink: 0;
  color: #4444;
}

.siteNotification span {
  position: relative;
}

.siteNotification span::after {
  content: "";
  width: 6px;
  height: 6px;
  position: absolute;
  background-color: #fb5454;
  border-radius: 50%;
  top: 1px;
  right: 1.5px;
}

@media screen and (max-width: 400px) {
  .siteLogo > img {
    width: 24px;
    height: 26px;
  }

  .siteLogoLink > div > span {
    font-size: 18px;
  }

  .siteNotification {
    width: 40px;
    height: 40px;
  }

  .logoSiteNotification {
    width: 20px;
    height: 20px;
    padding: 1.667px 2.917px;
  }

  .siteNotification span::after {
  content: "";
  width: 5px;
  height: 5px;
  top: 2.5px;
  right: 3.5px;
}
}
</style>
