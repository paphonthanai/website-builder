// authStore.js (mock)
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: { uid: 'demo123', email: 'demo@example.com' },
    loading: false
  }),
  actions: {
    login(email, password) {
      this.user = { uid: 'demo123', email }
    },
    logout() {
      this.user = null
    }
  }
})
