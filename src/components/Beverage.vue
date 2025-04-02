<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <!-- Render creamer only if it's selected -->
        <Creamer 
          v-if="beverageStore.currentCreamer.id !== 'c1'" 
          :color="beverageStore.currentCreamer.color" 
          :name="beverageStore.currentCreamer.name" 
        />
      </template>
      <template v-slot:mid>
        <!-- Render syrup only if it's selected -->
        <Syrup 
          v-if="beverageStore.currentSyrup.id !== 's1'" 
          :color="beverageStore.currentSyrup.color" 
          :name="beverageStore.currentSyrup.name" 
        />
      </template>
      <template v-slot:bottom>
        <!-- Render the base beverage -->
        <Base 
          :color="beverageStore.currentBase.color" 
          :name="beverageStore.currentBase.name" 
        />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { useBeverageStore } from "../stores/beverageStore";

// Props definition
defineProps<{
  isIced: boolean;
}>();

const beverageStore = useBeverageStore();
</script>