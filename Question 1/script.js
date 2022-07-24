// Task 5 Question 1
//Do the below programs in anonymous function and IIFE

/*----------------------------------------------------------------------
                       using anonymous function
-------------------------------------------------------------------------*/
console.log("Using anonymous function");
//a) Print odd numbers in an array

let ArrayData= [20,21,22,23,24,25,26,27,28,29,30];
let oddNumbers=function(Data){
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
let TitleCaps=function (data){
let upper = [];
data.forEach(element => {
  upper.push(element.toUpperCase());
});

return upper;
}
console.log(`1.(b)
In uppercase:
${TitleCaps(ArrayString)}`);

//c) Sum of all numbers in an array

let arrayNum=[21,56,34,67,23,90];
let SumOfArray=function(data){
    
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
let PrimeCheck=function(num){
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
let palindrome=function(str){
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
  

//f) Return median of two sorted arrays of the same size

let array1=[10,11,12,13,14];
let array2=[20,21,22,23,24];
let median= function(array1,array2){
let data=array1.concat(array2);
let len=data.length;
  let median1=(data[(len/2)-1]  + data[len/2])/2;
console.log(`1.(f)
median:${median1}`);
}
  median(array1,array2);

//g)Remove duplicates from an array

	let strngArray = ["red", "blue", "green", "yellow", "red", "blue", "red"];

	let removeDuplicates=function(arr){
		return arr.filter((item,
			index) => arr.indexOf(item) === index);
	}

console.log(`1(g):
${removeDuplicates(strngArray)}`);



//h)Rotate an array by k times
let NumArray=[1,2,3,4,5,6,7,8,9];
let k=5;
let rotateArray = function(nums, k){
  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}
console.log(`1.(h)
Rotated array:
${rotateArray(NumArray,k)}`);


/*-----------------------------------------------------------------------------
            Using IIFE
--------------------------------------------------------------------------------*/


//Using IIFE
console.log("-------Using IIFE-------");

//a) Print odd numbers in an array

let ArrayData1= [20,21,22,23,24,25,26,27,28,29,30];
(function (Data){
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
})(ArrayData1);

//b) Convert all the strings into titlecaps in a string array

let ArrayString1=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
(function (data){
let upper = [];

ArrayString.forEach(element => {
  upper.push(element.toUpperCase());
});

console.log(`1.(b)
In uppercase:
${upper}`);
})(ArrayString1);

//c) Sum of all numbers in an array

let arrayNum1=[21,56,34,67,23,90];
(function (data){
    
    let sum=0;
    for(let i=0; i<arrayNum.length; i++){
        sum=sum + arrayNum[i];
    }

console.log(`1.(c)
Sum of all numbers in the array = ${sum}
             `);
  })(arrayNum1);


//d) Return all the prime numbers in the array
const arrayprime = [-5, -3, -2, -1, ...Array(20).keys()]; 
(function(num){
  var  res="";
  for(i=0;i<num.length;i++)
  {
      var count=0;
      for(j=1;j<=num[i];j++)
      {
          if(num[i]%j===0)
          {
              count++
          }
      }
      if(count==2)
      {
          res+=num[i]+" "
      }
  }
  console.log(`1.(d)
  Prime numbers are:
  ${res}`);

})(arrayprime);


//e)Return all the paliandromes in the array
let arrayPal1=["rotator","deed","water","peep","noon","ice"];
(function (str){
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

console.log(`1.(e)
Paliandromes words:
${output}`);
})(arrayPal1);
  

//f) Return median of two sorted arrays of the same size

let arr1=[10,11,12,13,14];
let arr2=[20,21,22,23,24];
(function (array1,array2){
let data=array1.concat(array2);
let len=data.length;
  let median1=(data[(len/2)-1]  + data[len/2])/2;
console.log(`1.(f)
median:${median1}`);
})(arr1,arr2);

//g)Remove duplicates from an array

	let strngArray1= ["red", "blue", "green", "yellow", "red", "blue", "red"];

	(function (arr){
		console.log(`1(g):
    ${arr.filter((item,
			index) => arr.indexOf(item) === index)}
      `);

    })(strngArray1);



//h)Rotate an array by k times
let NumArray1=[1,2,3,4,5,6,7,8,9];
let k1=5;
(function(nums, k){

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

console.log(`1.(h)
Rotated array:
${nums}`);
})(NumArray1, k1);

/*-------------------------------Output------------------------
script.js:7 Using anonymous function
script.js:18 1.(a)
Odd numbers are:
21,23,25,27,29
 
script.js:38 1.(b)
In uppercase:
SUNDAY,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY
script.js:54 1.(c)
Sum of all numbers in the array = 291
             
script.js:70 1.(d)
Prime numbers in the array are :
2,3,5,7,11,13,17,19
script.js:99 1.(e)
Paliandromes words:
rotator,deed,peep,noon
script.js:112 1.(f)
median:17
script.js:126 1(g):
red,blue,green,yellow
script.js:142 1.(h)
Rotated array:
5,6,7,8,9,1,2,3,4
script.js:153 -------Using IIFE-------
script.js:165 1.(a)
Odd numbers are:
21,23,25,27,29
 
script.js:181 1.(b)
In uppercase:
SUNDAY,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY
script.js:196 1.(c)
Sum of all numbers in the array = 291
             
script.js:221 1.(d)
  Prime numbers are:
  2 3 5 7 11 13 17 19 
script.js:249 1.(e)
Paliandromes words:
rotator,deed,peep,noon
script.js:263 1.(f)
median:17
script.js:272 1(g):
    red,blue,green,yellow
      
script.js:290 1.(h)
Rotated array:
5,6,7,8,9,1,2,3,4
*/