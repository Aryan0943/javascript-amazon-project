import {formatCurrency}  from "../../js/utilis/money.js";
console.log('test suite:formatCurrency');

console.log('Converts cents into dollars');
if(formatCurrency(2095)==='20.95'){
    console.log('passed');
}
else{
    console.log('failed');
}

console.log('Works with Zero');
if(formatCurrency(0)==='0.00'){
    console.log('passed');
}
else{
    console.log('failed');
}

console.log('Round  up to nearest centt');
if(formatCurrency(2095)==='20.95'){
    console.log('passed');
}
else{
    console.log('failed');
}

