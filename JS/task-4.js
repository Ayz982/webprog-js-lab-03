//Задача 4. Доставка товару.
function getShippingCost(country){
    let price;
    switch(country){
        case 'China': 
            price = 100; 
            break;
        case 'Chile': 
            price = 250; 
            break;
        case 'Australia': 
            price = 170;    
            break;
        case 'Jamaica': 
            price = 120; 
            break;
        default: 
            let result = "Sorry, there is no delivery to your country"; 
            return result;
    }
    let result = `Shipping to ${country} will cost ${price} credits`;
    return result;
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"