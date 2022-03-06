Vue.component('InventoryAlert',{
    props: {
        isEmpty: {
            type: Boolean,
            required: true,
        },
        isLow: {
            type: Boolean,
            required: true,
        }
    },

    template: `
    <v-flex>
        <v-alert type="error" v-show="this.isEmpty">
            Out Of Stock
        </v-alert>
        <v-alert type="warning" v-show="this.isLow">
            Running Low
        </v-alert>
    </v-flex>

    `
})