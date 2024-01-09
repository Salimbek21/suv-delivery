<script setup lang="ts">

const router = useRouter()
</script>

<template>
  <pre>{{router.currentRoute.value.path}}</pre>
</template>