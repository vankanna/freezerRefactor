Vue.component('Item', {
    props: {
        item: {
            type: Item,
            required: true,
        },
    },

    data(){
        return {
            inventory: this.quantity,
            overlay: {
                show: false,
            },
            isLow: (this.item.quantity === 1),
            isEmpty: (this.item.quantity === 0),
        }
    },

    methods: {
        addInventory: function() {
            this.item.quantity +=1;
            this.isEmpty = false;
            if(this.item.quantity === 1) {
                this.isLow= true;
            }
            if(this.item.quantity > 1) {
                this.isLow= false;
            }
        },
        subtractInventory: function() {
            if(this.item.quantity > 0) {
                this.item.quantity -= 1;
            }
            if (this.item.quantity === 1) {
                this.isLow = true;
            }
            if (this.item.quantity === 0) {
                this.isLow= false;

                this.isEmpty = true;
            }
        },
        editItem: function(){
            this.$emit('edit-item', this.item.id);
        },
        deleteItem(){
            this.$emit('delete-item', this.item.id);
        }

    },

    template: `
        <v-flex class="item">
            <v-card  min-width="250px">
            <inventory-alert :isEmpty="isEmpty" :isLow="isLow" ></inventory-alert>
                <v-card-text>
                <v-row><v-rating
                          v-model="rating"
                          background-color="indigo lighten-3"
                          medium
                          color="primary"
                          length="5"
                        ></v-rating><br><br>
                    <v-col><div class="category">{{item.category}}</div></v-col>         
                   
                </v-row>
                
                <p class="text-h4 text--primary pa-3">{{item.name}}</p>
                <div class="d-flex justify-space-between">Expiration Date
                    <span class="d-flex justify-space-between">Quantity</span>
                </div>
                <div class="d-flex justify-space-between text-h6 text--primary">{{item.expiration}} <span class="d-flex justify-space-between text-h6">
                <v-card-actions class="justify-end">
                    <v-btn x-small @click="subtractInventory()" outlined>
                        <v-icon dark>mdi-minus</v-icon>
                    </v-btn>
                    <v-btn x-small @click="addInventory()" outlined>
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-card-actions>{{item.quantity}}</span></div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn text @click="overlay.show=true">Edit</v-btn>
                    <v-btn color="error" @click="deleteItem()" text>Delete</v-btn>
                </v-card-actions>
                <edit-item :item="item" :overlay="overlay"></edit-item>
            </v-card>
        </v-flex>
    `,

});
