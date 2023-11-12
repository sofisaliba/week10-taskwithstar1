let quantity = 2;
let price = 15000000;
function calculateTotalPrice(quantity, price) {
let result = quantity * price;
return result;
}

let totalPrice = calculateTotalPrice(quantity, price);
alert("Стоимость покупки: " + totalPrice.toLocaleString('ru-RU') + " рублей");