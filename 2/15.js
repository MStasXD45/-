var arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
var k=prompt("Введите шаг сдвига массива");
console.log(k);
for(var i=0;i<k;i++)
{
    arr.unshift(arr.pop());
}

console.log(arr);