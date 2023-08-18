function sumValues(obj){
    let sum = 0;
    for (let key in obj){
        sum += obj[key]
    }
    return sum;
}

const dinner = {
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    mac_and_cheese: 14,
    soupAndSalad: 16,
}

let sum = 0;
for (let key in dinner){
    console.log(key);
    console.log(dinner[key]);
    sum += dinner[key];
}

console.log(sumValues(dinner));
