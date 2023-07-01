<!-- eslint-disable vue/use-v-on-exact -->
<template>
    <div class="div">
        <p>{{ hello }}, {{ whoami }}</p>
        <button @click="myMethod">Click me</button>
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
            hello: 'Hello Figma!',
            whoami: defaultStore.whoami,
            myMethod,
        }
    },
}
</script>
