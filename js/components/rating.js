Vue.component('Rating',{
    props: {
        value: {
            type: Number,
            required: true,
            default: 0,
        },
    },


    data() {
        return {
            rating: this.value
        }
    },

    watch: {
        model(currentValue) {
            this.$emit('input', currentValue)
        }
    },


    template:
        `
        <v-rating
          v-model="rating"
          background-color="indigo lighten-3"
          medium
          color="primary"
          length="5"
          value="this.value"
        ></v-rating>
        
        `
})
