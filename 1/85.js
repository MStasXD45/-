var str1 = prompt("Введите первую строку: ");
var str2 = prompt("Введите вторую строку: ");
let words1 = str1.split(" ");
let uniqueWords1=[... new Set(words1)];
console.log(words1);
console.log(uniqueWords1);
let words2 = str2.split(" ");
console.log(words2);
var count=0;

for(var i=0;i<uniqueWords1.length;i++)
{
    for(var j=0;j<words2.length;j++)
    {
        console.log
        if(uniqueWords1[i]==words2[j])
        {
            count++;
        }
               
    }
    console.log(uniqueWords1[i]+"---"+count) 
    count=0;
}
