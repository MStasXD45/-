
var num=prompt('Введите число(1-4):  ', 100);
//var num=prompt("Test");
console.log(num);

switch(num)
{
    case '1':console.log("Зима"); break;
    case '2':console.log("Весна"); break;
    case '3':console.log("Лето"); break;
    case '4':console.log("Осень"); break;
    default:console.log("Нужно вводить цыфры 1-4");break;
}