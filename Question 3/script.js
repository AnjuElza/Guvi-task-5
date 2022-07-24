// Qn.3) Do the below programs in arrow function

//a) Print odd numbers in an array

let ArrayData= [20,21,22,23,24,25,26,27,28,29,30];
let oddNumbers=(Data)=>{
oddnum=[];
    for(let i=0; i<Data.length; i++) {
        if(Data[i]%2!=0) {
            oddnum.push(Data[i]);
}
    }
console.log(`1.(a)
Odd numbers are:
${oddnum}
 `)
}
oddNumbers(ArrayData);


//b) Convert all the strings into titlecaps in a string array

let ArrayString=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let TitleCaps=(data)=>{
let upper = [];

ArrayString.forEach(element => {
  upper.push(element.toUpperCase());
});

return upper;
}
console.log(`1.(b)
In uppercase:
${TitleCaps()}`);

//c) Sum of all numbers in an array

let arrayNum=[21,56,34,67,23,90];
let SumOfArray=(data)=>{
    
    let sum=0;
    for(let i=0; i<arrayNum.length; i++){
        sum=sum + arrayNum[i];
    }
    return sum;

}
console.log(`1.(c)
Sum of all numbers in the array = ${SumOfArray(arrayNum)}
             `);


//d) Return all the prime numbers in the array
const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
let PrimeCheck=(num)=>{
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(`1.(d)
Prime numbers in the array are :
${array.filter(PrimeCheck)}`);


//e)Return all the paliandromes in the array

let arrayPal=["rotator","deed","water","peep","noon","ice"];
let palindrome=(str) =>{
  let output=[];
for(let i=0;i<arrayPal.length;i++){

    let len = str[i].length;
    let mid = Math.floor(len/2);
    let eachStrng=str[i];
    let temp=0;
    for ( let j = 0; j< mid; j++ ) {
        if (eachStrng[j] == eachStrng[len - 1 - j]) {
          temp=temp+1;
        }
        if(temp==mid){
            output.push(eachStrng);
        }
        
    }
}
return output;

}
console.log(`1.(e)
Paliandromes words:
${palindrome(arrayPal)}`);

/*------------------------------Output------------------
script.js:13 1.(a)
Odd numbers are:
21,23,25,27,29
 
script.js:33 1.(b)
In uppercase:
SUNDAY,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY
script.js:49 1.(c)
Sum of all numbers in the array = 291
             
script.js:65 1.(d)
Prime numbers in the array are :
2,3,5,7,11,13,17,19
script.js:94 1.(e)
Paliandromes words:
rotator,deed,peep,noon
index.html:39 Live reload enabled.
*/