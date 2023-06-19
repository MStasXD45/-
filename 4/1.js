var nameList=['Кузьмин Иван','Петров Петр','Федоров Иван'];

for(var i=0;i<nameList.length;i++)
{
    console.log(nameList[i]);
}
var nameSurname=prompt("Enter name, surname");
var reglist=/nameSurname/;

for(var i=0;i<3;i++)
{
if(nameList[i].search(nameSurname)==-1) 
{
}
else{
    

  console.log("совпадение найдено");
  nameList[i]='Иван Иванов';
  nameList.push(nameSurname);}
}


console.log("=======================================")

for(var i=0;i<nameList.length;i++)
{
    console.log(nameList[i]);
}

