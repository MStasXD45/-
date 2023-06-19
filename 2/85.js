console.log("НЕ ДОДЕЛАНО")
console.log("Найти минимальный (максимальный) элемент среди тех столбцов матрицы A(n х m), элементы которых упорядочены по невозрастанию (неубыванию).")
var min,max;

var matrix=[[1,2,3,4],[9,8,7,6],[7,3,9,5],[4,3,2,1]];
for(var i=0;i<matrix.length;i++)
    console.log(matrix[i]);

var tip=prompt("min/max")
var dir=prompt("Введите: 0 для невозростания, 1 для неубывания");
var temp;
var b=0;
if(tip=="min")
{
    if(dir==0)
    {
        min=matrix[0][0];
        //min=5;
        for(var i=0;i<matrix.length;i++)
        {
            for(var j=0;j<matrix[i].length;j++)
            {
                if(matrix[i]<=matrix[i+1])
                b=0;
                else
                b=1;
            }
            if(b==1) continue;
            temp=matrix[i][0];
            for(var j=0;j<matrix[i].length;j++)
            {
                if(temp>matrix[i][j])
                    temp=matrix[i][j];
            }
            if(min>temp)
            min=temp;

        }
        console.log(min);
    }
    else
    {
        min=matrix[0][0];
        //min=5;
        for(var i=0;i<matrix.length;i++)
        {
            for(var j=0;j<matrix[i].length;j++)
            {
                if(matrix[i]>=matrix[i+1])
                b=0;
                else
                b=1;
            }
            if(b==1) continue;
            temp=matrix[i][0];
            for(var j=0;j<matrix[i].length;j++)
            {
                if(temp>matrix[i][j])
                    temp=matrix[i][j];
            }
            if(min>temp)
            min=temp;

        }
        console.log(min);
    }
}
else
{
    if(dir==0)
    {
        max=matrix[0][0];
        //max=5;
        for(var i=0;i<matrix.length;i++)
        {
            for(var j=0;j<matrix[i].length;j++)
            {
                if(matrix[i][j]>=matrix[i][j+1])
                b=0;
                else
                b=1;
                console.log(b+"  b");
            }
            if(b==1) continue;
            temp=matrix[i][0];
            console.log(temp+"  temp");
            for(var j=0;j<matrix[i].length;j++)
            {
                if(temp<matrix[i][j])
                    temp=matrix[i][j];
                    console.log(temp+ "temp");
            }
            if(max<temp)
            max=temp;

        }
        console.log(max);
    }
    else
    {
        max=matrix[0][0];
        //max=5;
        for(var i=0;i<matrix.length;i++)
        {
            for(var j=0;j<matrix[i].length;j++)
            {
                if(matrix[i]>=matrix[i+1])
                b=0;
                else
                b=1;
            }
            if(b==1) continue;
            temp=matrix[i][0];
            for(var j=0;j<matrix[i].length;j++)
            {
                if(temp<matrix[i][j])
                    temp=matrix[i][j];
            }
            if(max<temp)
            max=temp;

        }
        console.log(max);
    }
}