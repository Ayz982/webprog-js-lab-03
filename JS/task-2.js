//Задача 2. Форматування повідомлення.
function formatMessage(message, maxLength){
    if(message.length <= maxLength){
        return message;
    }
    else{
        return message.substring(0, maxLength) + "...";
    }
}
function formatString(string, maxLength){
    if(string.length <= maxLength){
        return string;
    }
    else{
        let result;
        for(let i = 0; i < maxLength-3; i++){
            result += string[i];
        }
        result += "..."
        return result;
    }
}
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purusnec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purusnec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nuncfringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nuncfringilla", 41)); // "Nunc sed turpis a felis in nuncfringilla"
console.log(formatString("Curabitur ligula sapien", 19)); // "Curabitur ligula..."
