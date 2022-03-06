Vue.component('AddItem',{
    data(){
        return {
            name: '',
            category: '',
            expirationDate: '',
            quantity: 0,
        }
    },
    methods:{
        addItem: function(){
            const item = new Item(this.name, this.category, this.expirationDate, this.quantity)
            this.$emit('add-item', item);
        }
    },
    template:
    `
        <v-flex>
            <category-select  v-model="category"></category-select>
            <v-text-field label="Name"  v-model="name" light text-h4 solo full-width text></v-text-field>
            <v-text-field label="MM/DD/YYYY" v-model="expirationDate" light text-h4 solo full-width text></v-text-field>
            <v-text-field label="Quantity" v-model="quantity" light text-h4 solo full-width text></v-text-field>
            <v-btn text color="primary" @click="addItem()">Add</v-btn>
        </v-flex>
    `
})