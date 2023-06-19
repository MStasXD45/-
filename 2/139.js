console.log("Сформировать квадратную матрицу n x n, на диагонали которой находятся случайные числа из диапазона [1; 9], а остальные числа равны 1.");
var n=prompt("Введите длину стороны матрцы");
var matrix=[];
for(var i=0;i<n;i++)
{
    matrix[i]=[];
    for(var j=0;j<n;j++)
    {
        if(i==j)
        matrix[i][j]=Math.floor(Math.random()*9);
        else 
        matrix[i][j]=1;
    }
}

for(var i=0;i<matrix.length;i++)
{
    console.log(matrix[i]);
}