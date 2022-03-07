Vue.component('InventoryAlert',{
    props: {
        quantity: {
            type: Number,
            required: true,
        }
    },

    data(){
        return {
            status: {
                low: {
                    style: "warning",
                    message: "Running Low!"
                },
                empty: {
                    style: "error",
                    message: "Out Of Stock!"
                }
            },
            style: "",
            message: "",
            show: false,
        }
    },
    created: function () {
        this.update();
    },

    watch: {
        quantity: function() {
            this.update();
        }
    },

    methods: {
        update: function() {
            if (this.quantity === 0) {
                this.style = this.status.empty.style;
                this.message = this.status.empty.message;
                this.show = true;
            } else if (this.quantity === 1 ) {
                this.style = this.status.low.style;
                this.message = this.status.low.message;
                this.show = true
            } else {
                this.show = false;
            }
        },
    },

    template: `
    <v-flex>
        <v-alert :type="this.style" v-show="this.show">
            {{this.message}}
        </v-alert>
    </v-flex>
    `
})