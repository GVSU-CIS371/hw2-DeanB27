<template>
  <div class="syrup" :style="{ backgroundColor: color }"></div>
</template>

<script setup lang="ts">
defineProps<{
  color: string;
  name: string;
}>();
</script>

<style scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
