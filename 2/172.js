console.log("Латинским квадратом порядка n называется квадратная матрица размером n x n, каждая строка и каждый столбец которой содержат все числа от 1 до n. Проверить, является ли заданная матрица латинским квадратом.")
var n=prompt("Введите длину стороны")
var matrix=[]
var b=1;
//matrix=[[1,2,3,4],[4,2,3,1],[4,1,3,1],[1,1,1,1]];

for(var i=0;i<n;i++)
{
    matrix[i]=[];
    for(var j=0;j<n;j++)
    {
        matrix[i][j]=Math.floor(Math.random()*9);
    }
    console.log(matrix[i]);
}

for(var i=0;i<n;i++)
{
    for(var j=0;j<n;j++)
    {
        if(matrix[i][j]>=1&&matrix[i][j]<=n)
            continue;
        else
            b=0;
        if(b==0)
            break;
    }
    if(b==0)
    break;
}
if(b==0)
    console.log("Это не латинская матрица");
else
    console.log("Это латинская матрица");
