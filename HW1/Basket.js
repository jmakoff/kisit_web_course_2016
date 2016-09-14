var prodcuts = [{
    name: "laptop",
    price: 1000,
    inventory: 20
}, {
    name: "mouse",
    price: 275,
    inventory: 2
}];

function ProductLineItem(product) {
    this.name = product.name;
    this.price = product.price;
    this.inventory = 1;
}

ProductLineItem.prototype = {
    ShowInfo: function () {
        console.log("Name: " + this.name + " Price: " + this.price + " Inventory: " + this.inventory);
    }
};

var basket = (function () {

    var productLineItems = [];

    return {
        addProduct: function (itemsInd) {
            if (!(itemsInd in prodcuts)) {

                console.log("add index: " + itemsInd + ", err: you want to add product do which doesn't exist");
                return false;
            }
            var itemIndex = this.indexOf(prodcuts[itemsInd].name);
            productLineItems.push(new ProductLineItem(prodcuts[itemsInd]))
            prodcuts[itemsInd].inventory--;
            if (prodcuts[itemsInd].inventory < 1){
                console.log('no this product in shop');
                return false;
            }
            console.log('product ' + prodcuts[itemsInd].name + ' successfully added to the basket')
            return true;
        },

        removeProduct: function (itemsInd) {

            if (!(itemsInd in prodcuts)) {
                console.log('uncorrect index!!!')
                return false;
            }

            var itemIndex = this.indexOf(prodcuts[itemsInd].name);
            prodcuts[itemsInd].inventory++;



            if (productLineItems[itemIndex].inventory > 0) {
                productLineItems[itemIndex].inventory--;
console.log('product '+ prodcuts[itemsInd].name + ' successfully removed')
                return true;
            }
        },

        updateProductQuantity: function (itemsInd, quantity) {

            if (!(itemsInd in prodcuts)) {
                console.log('Uncorect index');
                return false;

            }
            var itemIndex = this.indexOf(prodcuts[itemsInd].name);

            if (itemIndex == -1) {
                return false;
            }

            productLineItems[itemIndex].inventory = quantity;
            console.log('updated quantity successfuly, now its: ' + productLineItems[itemIndex].inventory)

            return true;
        },

        getTotalPrice: function () {

            var totalPrice = 0;

            for (var i = 0; i < productLineItems.length; i++) {

                totalPrice += productLineItems[i].price * productLineItems[i].inventory;
            }
            console.log('Total Price = ' + totalPrice)
            ;
        },

        indexOf: function (productName) {

            for (var i = 0; i < productLineItems.length; i++) {
                if (productLineItems[i].name == productName)
                    return i;
            }

            return -1;
        },

        ShowAllInfo: function () {
            for (var i = 0; i < productLineItems.length; i++) {
                productLineItems[i].ShowInfo();
            }
        }
    }
})();
basket.addProduct(0);
basket.addProduct(10);
basket.addProduct(1);
basket.removeProduct(1);
basket.addProduct(1);
basket.addProduct(1);
basket.updateProductQuantity(5, 20);
basket.updateProductQuantity(0, 20);
basket.getTotalPrice()
basket.ShowAllInfo();

