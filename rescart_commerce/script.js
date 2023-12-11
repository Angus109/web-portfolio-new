






var myVar;

function ldtada() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader004").style.display = "none";
    document.querySelector("#hidden").style.display = "block";
    document.querySelector("#footer_hidden").style.display = "block";
}





function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
}


// ************************************************
// Shopping Cart API
// ************************************************


var shoppingCart = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];

    // Constructor
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
})();

// Add item
document.querySelectorAll('.add-to-cart').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        var name = button.getAttribute('data-name');
        var price = Number(button.getAttribute('data-price'));
        shoppingCart.addItemToCart(name, price, 1);
        displayCart();
    });
});

// Clear items
document.querySelectorAll('.clear-cart').forEach(function (button) {
    button.addEventListener('click', function () {
        shoppingCart.clearCart();
        displayCart();
    });

});

function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    cartArray.forEach(function (item) {
        output += "<tr>" +
            "<td>" + item.name + "</td>" +
            "<td>(" + item.price + ")</td>" +
            "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name='" + item.name + "'>-</button>" +
            "<input type='number' class='item-count form-control' data-name='" + item.name + "' value='" + item.count + "'>" +
            "<button class='plus-item btn btn-primary input-group-addon' data-name='" + item.name + "'>+</button></div></td>" +
            "<td><button class='delete-item btn btn-danger' data-name='" + item.name + "'>X</button></td>" +
            " = " +
            "<td>" + item.total + "</td>" +
            "</tr>";
    });
    document.querySelector('.show-cart').innerHTML = output;
    document.querySelector('.total-cart').innerHTML = shoppingCart.totalCart();
    document.querySelector('.total-count').innerHTML = shoppingCart.totalCount();
}

// Delete item button
document.querySelector('.show-cart').addEventListener("click", function (event) {
    if (event.target.classList.contains('delete-item')) {
        var name = event.target.getAttribute('data-name');
        shoppingCart.removeItemFromCartAll(name);
        displayCart();

    }
});

// -1
document.querySelector('.show-cart').addEventListener("click", function (event) {
    if (event.target.classList.contains('minus-item')) {
        var name = event.target.getAttribute('data-name');
        shoppingCart.removeItemFromCart(name);
        displayCart();
    }
});

// +1
document.querySelector('.show-cart').addEventListener("click", function (event) {
    if (event.target.classList.contains('plus-item')) {
        var name = event.target.getAttribute('data-name');
        shoppingCart.addItemToCart(name);
        displayCart();
    }
});



// Item count input
document.querySelector('.show-cart').addEventListener("change", function (event) {
    if (event.target.classList.contains('item-count')) {
        var name = event.target.getAttribute('data-name');
        var count = Number(event.target.value);
        shoppingCart.setCountForItem(name, count);
        displayCart();
    }
});


document.querySelector('#cartButton').addEventListener("click", () => {
    document.querySelector('#cart-modal').style.display = "block";

});

document.querySelector('.active_close').addEventListener("click", () => {
    document.querySelector("#cart-modal").style.display = "none";
})








displayCart();




