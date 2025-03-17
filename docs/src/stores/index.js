import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', {
  state: () => ({
    isTopBarVisible: true, // 是否显示上边栏
    isSideBarVisible: true,
  }),
  actions: {
    toggleTopBarVisibility(visible) {
      this.isTopBarVisible = visible !== undefined ? visible : !this.isTopBarVisible;
    },
    toggleSiderBarVisible(visible){
        this.isSideBarVisible = visible !== undefined ? visible : !this.isSideBarVisible
    }
  },
});