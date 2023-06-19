var x=prompt("Введите дробь");
var n=prompt("Введите степень");
var sum=0;
for(var i=1;i<=n+1;i++)
{
    sum=sum + Math.pow(Math.sin(x),i);
    console.log(sum);

}
console.log(sum);
sum=0;