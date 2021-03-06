// adds Vuetify functionality to your Vue app
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
            	// modify themes (light or dark) on the fly
                light: {
                    primary: '#00BFFF'
                }
            }
        }
    }),
    data: {

        items: [
            new RatingDecorator(new Item("Ice Cream", "Other","02/12/2024",4), 4),
            new RatingDecorator(new Item("Pork", "Meat","02/12/2024",4), 1),
            new RatingDecorator(new Item("Jacks Pepperoni Pizza", "Other","02/12/2024",6), 2),
            new RatingDecorator(new Item("Grass Fed Top Sirloin Steak", "Meat", "02/12/2024", 1), 3),
            new RatingDecorator(new Item("Ice", "Other","02/12/2024",1), 2),
            new RatingDecorator(new Item("Beef", "Meat","02/12/2024",1), 5),
            new RatingDecorator(new Item("Top Sirloin Steak", "Meat", "NA", 0), 3),

        ],
        itemToEdit: false,
        searching: false,
        showAddMenu: false,
        category: '',
    },
    methods: {

        addItem: function(item){
            console.log("item")
            this.items.unshift(item);
        },
        editItem: function (id){
            const index = this.items.findIndex(i => i.id === id)
            this.itemToEdit = this.items[index]
        },
        deleteItem: function(id){
            const index = this.items.findIndex(i => i.id === id)
            this.items.splice(index,1)
        },
    },

    computed: {
        filteredItems: function(){
            let category = this.category;
            if(category && this.searching){
                return this.items.filter(function(item){
                    return (item.category.search(category) >= 0);
                });
            }else{
                return this.items.filter(function(item){
                    return item;
                });
            }
        }
    },

});
