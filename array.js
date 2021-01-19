//Q1
var arr1=[];
var arr2=new Array;
console.log(arr1);//consolelog 1st line
console.log(arr2);//consolelog 2nd line
//Q2
//2.1)
function maxArr(arr){
var max=0;

  for (let i=0;i<=arr.length-1;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
}
console.log(maxArr([2,4,6,8,,2,45]))//consolelog 3rd line
//2.2)
function minArr(arr3){
var min=1000000000;

  for (let i=0;i<=arr3.length-1;i++){
    if(arr3[i]<min){
      min=arr3[i];
    }
  }
  return min;
}
console.log(minArr([3,7,2,,8,4]))//consolelog 4th line

//Q4
//3.1)
var arr4=["Apple","Banana"];
arr4.splice(1,0,"Grapes","strawberry","Mango","papaya","woodapple");
console.log(arr4);//consolelog 5th line
//3.1)
var fruitInIndex3=arr4[3];
//3.2)
var arrLength=arr4.length;
//3.3)
var reverseArr4=arr4.reverse();
console.log(reverseArr4);//consolelog 6th line

//Q4
//4.1)
var num=[4,1,8,3,9,12];
newNum=num.sort(function(a,b){return a-b});
console.log(newNum);
//Q5
var foods = ["rice", "pizza", "sandwich", "rolls"];

//5.1)
foods.pop();
console.log(foods);//consolelog 7th line
//5.2)
foods.push("cake");
console.log(foods);//consolelog 8th line
//5.3)
foods.shift();
console.log(foods);//consolelog 9th line
//Q6)
//6.1)
var fruits = ["Apple"];
fruits.splice(0,0, "Pineapple", "Lemon" );
console.log(fruits);    //consolelog 10th line
//6.2)
fruits.push("Orange","Peach");
console.log(fruits);   //consolelog 11th  line


var month;
switch (new Date().getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    day = "Febuary";
    break;
  case 2:
    month= "March";
    break;
  case 3:
    month= "April";
    break;
  case 4:
    month= "May";
    break;
  case 5:
    month= "June";
    break;
  case  6:
    month= "July";
  case 7:
      month = "August";
      break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
       break;
  case 10:
    month = "Novenber";
    break;
  case 11:
    month = "December";
    break;


}
