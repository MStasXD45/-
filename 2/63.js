var k1=prompt("Введите колличество коеффициентов первого полинома");
var arrk1 = [];
var strOut="";
for(var i=0;i<k1;i++)
arrk1.push(prompt("Введите коеффициенты первого полинома"));
console.log(arrk1);
console.log(k1);
for(var i=0;i<arrk1.length;i++)
    strOut+="+"+arrk1[i]+"x^"+i;
console.log(strOut);
strOut="";

var arrk2=[];
for(var i=0;i<k1;i++)
arrk2.push(prompt("Введите коеффициенты второго полинома"));
for(var i=0;i<arrk2.length;i++)
    strOut+="+"+arrk2[i]+"x^"+i;
console.log(strOut);
strOut="";

var arrksum=[];
console.log("Сложение даных полиномов");
for(var i=0;i<k1;i++)
    arrksum.push(parseInt(arrk1[i])+parseInt(arrk2[i]));
for(var i=0;i<arrksum.length;i++)
    strOut+="+"+arrksum[i]+"x^"+i;
console.log(strOut);