//var numbers = prompt("ВВедите числа через пробел").split(" ");
//console.log(numbers);
var numbers=[];
var sum=0;
var counter=0;

for(var i = 1000;i<9999;i++)
{
    numbers.push(i);
}

for(var i=0; i<numbers.length;i++)
{
    let array = (""+numbers[i]).split("").map(Number)
    //console.log(array);
    for(var j=0;j<array.length;j++)
    {
        sum=sum+array[j];
      //  console.log(sum);
    }
    if(sum==15)
    console.log(numbers[i]);
    sum=0;
}
//console.log(numbers);

