<template>
  <div class="app-container">
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />
    
    <div class="controls-container">
      <!-- Temperature Controls -->
      <div class="control-group">
        <h3>Temperature</h3>
        <ul>
          <li v-for="temp in beverageStore.temps" :key="temp">
            <label>
              <input
                type="radio"
                name="temperature"
                :id="`r${temp}`"
                :value="temp"
                v-model="beverageStore.currentTemp"
              />
              {{ temp }}
            </label>
          </li>
        </ul>
      </div>
      
      <!-- Base Controls -->
      <div class="control-group">
        <h3>Base</h3>
        <ul>
          <li v-for="base in beverageStore.bases" :key="base.id">
            <label>
              <input
                type="radio"
                name="base"
                :id="`b${base.id}`"
                :value="base"
                v-model="beverageStore.currentBase"
              />
              {{ base.name }}
            </label>
          </li>
        </ul>
      </div>
      
      <!-- Creamer Controls -->
      <div class="control-group">
        <h3>Creamer</h3>
        <ul>
          <li v-for="creamer in beverageStore.creamers" :key="creamer.id">
            <label>
              <input
                type="radio"
                name="creamer"
                :id="`c${creamer.id}`"
                :value="creamer"
                v-model="beverageStore.currentCreamer"
              />
              {{ creamer.name }}
            </label>
          </li>
        </ul>
      </div>
      
      <!-- Syrup Controls -->
      <div class="control-group">
        <h3>Syrup</h3>
        <ul>
          <li v-for="syrup in beverageStore.syrups" :key="syrup.id">
            <label>
              <input
                type="radio"
                name="syrup"
                :id="`s${syrup.id}`"
                :value="syrup"
                v-model="beverageStore.currentSyrup"
              />
              {{ syrup.name }}
            </label>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Save Beverage Controls -->
    <div class="save-controls-container">
      <input 
        type="text" 
        placeholder="Beverage Name" 
        v-model="beverageStore.beverageName"
      />
      <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>
    </div>
  
    <!-- Saved beverages container -->
    <div id="beverage-container" class="saved-beverages">
      <h3 v-if="beverageStore.savedBeverages.length > 0">Saved Beverages</h3>
      <div class="beverage-list">
        <button 
          v-for="beverage in beverageStore.savedBeverages" 
          :key="beverage.id"
          :class="{ active: beverageStore.selectedBeverageId === beverage.id }"
          @click="beverageStore.showBeverage(beverage.id)"
        >
          {{ beverage.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}

.controls-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;
  overflow-x: auto; /* Allow horizontal scrolling if needed */
  margin-bottom: 20px;
}

.control-group {
  margin-right: 20px;
  
  &:last-child {
    margin-right: 0;
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #fff;
    padding-bottom: 5px;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 8px;
    
    label {
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
      
      input {
        margin-right: 8px;
      }
    }
  }
}

.save-controls-container {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  align-items: center;
}

input[type="text"] {
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  min-width: 200px;
  font-size: 16px;
}

button {
  padding: 8px 15px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  &.active {
    background-color: #e09e5f;
    color: white;
  }
}

.saved-beverages {
  width: 100%;
  color: #fff;
  text-align: center;
  
  h3 {
    margin-bottom: 15px;
  }
}

.beverage-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  
  button {
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }
    
    &.active {
      background-color: #e09e5f;
    }
  }
}

/* For ultra-small screens, allow vertical stacking as fallback */
@media (max-width: 500px) {
  .controls-container {
    flex-direction: column;
  }
  
  .control-group {
    margin-right: 0;
    margin-bottom: 15px;
  }
}
</style>