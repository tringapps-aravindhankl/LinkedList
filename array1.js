//concat method
let arr1=["virat","rohit"];
let arr2=["pandiya","dhoni"];
console.log(arr1);
console.log(arr2);
console.log("concat method:");
console.log("Cricket Player is",arr1.concat(arr2));


//push and pop
let arr3=[1,2,3,4,5];
console.log("Push method:")
arr3.push(6,7);
console.log(arr3);
console.log("Pop Method");
arr3.pop();
console.log(arr3);


//shift and unshift method
let arr4=[1,2,3,4,5];
console.log("Unshift Method");
arr4.unshift(0);
console.log(arr4);
console.log("Shift Method");
arr4.shift();
console.log(arr4);

//ForEach Method
let arr5=[11,12,13,14,15,16];
console.log("ForEach Method:")
arr5.forEach (hi);
function hi(i){
    console.log(i);
}


//String sort
let arr6=["dbc","acd","fef"];
console.log("String sort");
arr6.sort();
console.log(arr6);



//Sort method
let arr7=[14,12,10,9,1,2];
arr7.sort(function(a,b){
    return a-b;
});
console.log("Sort Method");
console.log(arr7);

//Splice Method
let arr10=[1,2,3,4];
arr10.splice(2,0,1,2,3);
console.log("Splice Method using Add");
console.log(arr10);
arr10.splice(2,2);
console.log(arr10);

//some 
let arr11=[2,4,6,8,11];
let arr12=arr11.some(check);
console.log("check the array using some method");
function check(age){
   return age%2==0;
}
console.log(arr12);

//every
let arr13=[10,20,30,40,50];
let arr14=arr13.every(ten);

console.log("Every Method");
function ten(a){
    return a%10==0;
}
console.log(arr14);

//copyWith
let arr=[1,2,3,4,5];
arr.copyWithin(2,0,2);
console.log("copyWithMethod");
console.log(arr);

//entries
let x;
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let f = fruits.entries();
console.log("entries method:");
for(x of f){
    console.log(x);
}

//fill method
let arr20 = ["Banana", "Orange", "Apple", "Mango"];
let arr21=arr20.fill("Kiwi",1,3);
console.log("fill method:");
console.log(arr20);

//filter method
let arr23=[10,20,35,40,50];
let arr22=arr23.filter(checker);

function checker(number){
    return number%2==0;
}
console.log("Filter Method:")

console.log(arr22);

//reverse
let arr16=[1,2,3,4,5];
arr16.reverse();
console.log("Reverse elements");
console.log(arr16);


//map
let arr18=[1,2,3,4,5,6];
let arr19=arr18.map(helo);

function helo(a){
    return a*10
}
console.log("Map");
console.log(arr19);
