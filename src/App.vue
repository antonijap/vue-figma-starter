<!-- eslint-disable vue/use-v-on-exact -->
<template>
    <div class="flex items-center justify-center h-screen">
        <div>
            <p class="text-gray-800">{{ hello }}</p>
            <p class="text-gray-500 text-sm mt-1">{{ whoami }}</p>
            <button class="px-4 py-2 rounded-md text-white bg-blue-500 mt-8" @click="myMethod">Method demo</button>
        </div>
    </div>
</template>

<script>
import { useDefaultStore } from './defaultStore'

export default {
    setup() {
        // Access the store
        const defaultStore = useDefaultStore()

        // Set up message handling
        onmessage = async (event) => {
            if (event.data.pluginMessage.type === 'name') {
                console.log('Name triggered')

                // You can use the store inside event handlers as well
                // defaultStore.someAction()
            } else {
                console.log('Else block triggered')
            }
        }

        const myMethod = () => {
            console.log('This is my method!')
        }

        // Return state and actions that should be available in the template
        return {
            ...defaultStore,
            // You can add other local reactive data here
            hello: 'Hello Figma coder!',
            whoami: defaultStore.whoami,
            myMethod,
        }
    },
}
</script>
