<template>
  <div class="baseBeverage" :style="{ backgroundColor: color }"></div>
</template>

<script setup lang="ts">
defineProps<{
  color: string;
  name: string;
}>();
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
}

@keyframes pour-tea {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
</style>