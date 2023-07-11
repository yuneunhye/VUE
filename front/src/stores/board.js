import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', () => {
  const board = ref(0)
    // const doubleCount = computed(() => count.value * 2)
  function boardList() {
    
  }

  return { board,  boardList}
})
