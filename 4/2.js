var string=prompt("Введите строку с числами");
console.log(string);
var a=/\d/;
var s1,s2;
for(var i=0;i<string.length;i++)
{
    if(string.match(a))
    {
s1=string.slice(0,string.search(a));
s2=string.slice(string.search(a)+1);
string=s1+s2;
}
}
//console.log(s1);
//console.log(s2);
console.log(string);
