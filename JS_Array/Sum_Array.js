const prompt=require("prompt-sync")({sigint:true});
var inputArray = [];
var size = prompt('Enter size of an Array = '); //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = parseInt(prompt('Enter Element ' + (i+1)+ '=  '));
}

//Print the array in the console.
console.log('The input array is: '+ inputArray);

let sum = 0;
for(let i = 0; i < size; i++){
    if(inputArray[i] % 2 == 0){
        sum += inputArray[i]
    }
};
console.log('The sum of even numbers is: '+ sum);