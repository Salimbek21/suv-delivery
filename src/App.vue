<script setup lang="ts">
const router = useRouter();

onBeforeMount(async () => {
  // const accessToken = localStorage.getItem('accessToken')
  // if (!accessToken) {
  //   await router.push('/login')
  // }
});
</script>

<template>
  <div v-if="router.currentRoute.value.path !== '/login'" class="wrapper">
    <div class="topBarWrapper">
      <TheTopBarLogo />
    </div>
    <TheSidebar />
    <div class="content">
      <RouterView />
    </div>
    <div class="downMenuContainer">
      <TheMenu />
    </div>
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<style>
.wrapper {
  height: 100vh;
}

.content {
  position: relative;
  margin-left: 256px;
  padding: 40px 20px 20px;
  transition: all 0.2s linear;
  z-index: 1;
}

body.sideBarClose .content {
  margin-left: 96px;
}

.downMenuContainer {
  display: none;
}

.topBarWrapper {
  display: none;
}

@media screen and (max-width: 600px) {
  .topBarWrapper {
    display: flex;
    margin: 0 auto;
    position: fixed;
    /* top: 10px; */
    top: 0;
    right: 0;
    left: 0;
    z-index:1 ;
  }

  .content {
    position: relative;
    margin-left: 0px;
    padding: 75px 20px 20px;
    transition: all 0.2s linear;
    z-index:auto;
  }

  body.sideBarClose .content {
    margin-left: 0px;
  }

  .downMenuContainer {
    width: 90%;
    display: block;
    margin: 0 auto;
    position: fixed;
    /* bottom: 20px; */
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
