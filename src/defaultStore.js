import { defineStore } from 'pinia'

export const useDefaultStore = defineStore({
    state: () => ({
        whoami: 'This starter is created by Antonija Pek.',
    }),
    actions: {},
})
