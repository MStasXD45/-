var str1 = prompt("Введите первую строку: ");
var str2 = prompt("Введите вторую строку: ");
let chars = str1.split('');
//console.log(chars);
let uniqueChars=[...new Set(chars)];
//console.log(uniqueChars,uniqueChars.length);
let chars2 = str2.split('');
//console.log(chars2);
let uniqueChars2=[...new Set(chars2)];
//console.log(uniqueChars2);

var kounter=0;
var bool=0;

for(var i=0;i<uniqueChars.length;i++)
{
    for(var j=0;j<uniqueChars2.length;j++)
    {
        //console.log(uniqueChars[i],uniqueChars2[j])
        if(uniqueChars[i]==uniqueChars2[j])
        {
        kounter++;
        break;
        }
        if(kounter==uniqueChars2.length)
        {
            bool=1;
        break;
        }
    }
}
if(bool==1)
    console.log("Можно из символов первой строки собрать вторую.");
else
    console.log("Нельзя собрать вторую строку из символов первой.");
