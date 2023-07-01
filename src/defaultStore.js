import { defineStore } from 'pinia'

export const useDefaultStore = defineStore({
    state: () => ({
        whoami: 'I am the Default Store! Hey there.',
    }),
    actions: {},
})
