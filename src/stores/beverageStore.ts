import { defineStore } from "pinia";
import temperatures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

interface Beverage {
  id: number;
  name: string;
  base: typeof bases[0];
  creamer: typeof creamers[0];
  syrup: typeof syrups[0];
  temperature: typeof temperatures[0];
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temperatures,
    currentTemp: temperatures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    beverageName: "",
    savedBeverages: [] as Beverage[],
    selectedBeverageId: null as number | null,
  }),
  
  actions: {
    makeBeverage() {
      if (!this.beverageName.trim()) {
        alert("Please enter a name for your beverage");
        return;
      }
      
      const newBeverage: Beverage = {
        id: Date.now(), // Simple unique ID
        name: this.beverageName,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        temperature: this.currentTemp,
      };
      
      this.savedBeverages.push(newBeverage);
      this.beverageName = ""; // Reset name input
    },
    
    showBeverage(beverageId: number) {
      const beverage = this.savedBeverages.find((b) => b.id === beverageId);
      
      if (beverage) {
        this.selectedBeverageId = beverageId;
        this.currentBase = beverage.base;
        this.currentCreamer = beverage.creamer;
        this.currentSyrup = beverage.syrup;
        this.currentTemp = beverage.temperature;
      }
    },
    
    // Additional helper methods
    setBase(base: typeof bases[0]) {
      this.currentBase = base;
    },
    
    setCreamer(creamer: typeof creamers[0]) {
      this.currentCreamer = creamer;
    },
    
    setSyrup(syrup: typeof syrups[0]) {
      this.currentSyrup = syrup;
    },
    
    setTemperature(temp: typeof temperatures[0]) {
      this.currentTemp = temp;
    },
  },
  
  persist: true,
});