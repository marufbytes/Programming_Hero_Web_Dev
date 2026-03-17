function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number" || discount<0 || discount>100) {
        return "Invalid";
    }
    else{
        let discountAmount = (currentPrice * discount )/100;
        let finalPrice = currentPrice-discountAmount;
        return finalPrice.toFixed(3);
    }
}

const finalPrice = newPrice(100, 10);
console.log(finalPrice);