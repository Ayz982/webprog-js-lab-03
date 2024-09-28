//Задача 3. Перевірка спаму.
function removePunctuation(text) {
    let result = ""; 
    for (let i = 0; i < text.length; i++) {
        if ((text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) || 
            (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) || 
            text[i] === " ") {
            result += text[i];
        }
    }
    return result;
}
function checkForSpam(message){
    let spamWords = ["spam", "sale"];
    message = removePunctuation(message);
    let words = message.split(" "); 
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < spamWords.length; j++){
            if (words[i].toLowerCase() === spamWords[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true