var employee = new Object();
{
employee.name;
employee.block;
employee.phone;
employee.salary;



function employee(name,block,phone,salary)
{
    this.name="John";
    this.block="A3";
    this.phone="0971345667";
    this.salary="100$";
    }
}

var johnEmployee=new employee();
//alert(johnEmployee.name);

//====================2====================

johnEmployee.adress="qwerty12345";
alert(johnEmployee.adress);