let sum=0
const num=prompt("enter a three digit number:")
let temp=num;
while(temp>0){
    let remainder=temp%10
    sum+=remainder*remainder*remainder
    temp=parseInt(temp/10)
}
if(sum==num){
    console.log(num+"is a armstrong number");
}else{
    console.log(num+"is not a strong number");
}